import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { User } from './Model/User.js'
import jwt from 'jsonwebtoken'
import { Book } from './Model/book.js'


const app = express()

mongoose.connect('mongodb+srv://fil:122114mongoose@cluster0.tdt1ph2.mongodb.net/auth?appName=Cluster0')
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
            password: hashedPassword,
            role:"user"
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
    const token = jwt.sign({ id: user.id, fullName: user.fullName, userName: user.userName, role: user.role }, "123")
    return res.status(200).json({
        message: "Login completed",
        token: token
    })
})

app.post('/books',auth,async(req,res)=>{
    try{
        if(req.user.role !="admin"){
            return res.status(400).json({message:"Not permitted"})
        }
    const book=new Book({
        title:req.body.title,
        author:req.body.author,
        price:req.body.price
    })
    await book.save()
    return res.status(201).json({message:"Book created"})
} catch(err){
    console.log(err)
    return res.status(500).json({message:"Internal server error"})
}
})

app.get('/books', auth, async(req, res) => {
    try{
        const book = await Book.find()
        return res.status(200).json(book)
}catch(err){
    console.log(err)
    return res.status(500).json({message:"Internal server error"})
}
})

app.put('/books/:id',auth,async(req,res)=>{
    try{
        const book= await Book.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            author:req.body.author,
            price:req.body.price
        },{new:true})
        return res.status(201).json(book)
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})
function auth(req, res, next) {
    const token = req.headers['authorization']?.split(" ")[1]
    console.log(token)
    if (!token) return res.status(300).json({ message: "Not Authorized" })
    jwt.verify(token, "123", (err, decoded) => {
        if (err) return res.status(300).json({ message: "Invalid token!" })
        req.user = decoded
        next()
    })
}

app.listen(3000, () => {
    console.log("server started on port 3000")
})