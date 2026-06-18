import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { User } from './Model/User.js'
import jwt from 'jsonwebtoken'


const app = express()

mongoose.connect('mongodb://localhost:27017/Auth')
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err))

app.use(express.json())


app.post('/signup', async (req, res) => {
    try {
        const user = req.body
        const existingUser = await User.find({ userName: user.userName })

        if (existingUser.length != 0) {
            return res.status(400).json({ message: "user name already token" })
        }
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = new User({
            fullName: user.fullName,
            userName: user.userName,
            password: hashedPassword
        })
        await newUser.save()
        return res.status(201).json({ message: "Account created" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal server error!" })
    }



})

app.post('/login', async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({ userName: userName })
    if (!user) {
        return res.status(400).json({ message: "Incorrect username or password" })

    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: "incorrect username or password 2" })
    }
    const token = jwt.sign({ id: user.id, fullName: user.fullName, userName: user.userName, role: "admin" }, "123")
    return res.status(200).json({
        message: "Login completed",
        token: token
    })
})

app.get('/books', auth, (req, res) => {
    return res.status(200).json({ message: "list of books for authorized user. your name is:" + req.user.fullName })
})
function auth(req, res, next) {
    const token = req.headers['authorization']?.split(" ")[1]
    console.log(token)
    if (!token) return res.status(300).json({ message: "Not Authorized" })
    jwt.verify(token, "123", (err, decode) => {
        if (err) return res.status(300).json({ message: "Invalid token!" })
        req.user = decoded
        next()
    })
}

app.listen(3000, () => {
    console.log("server started on port 3000")
})