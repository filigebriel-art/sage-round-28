const express = require('express')
const app = express()
app.use(express.json())


let books=[
    {
        id:1,
        title:"48 laws of power",
        author:"stefen",
        price:"$400"
    },
    {
        id:2,
        titie:"think and grow rich",
        author:"sara",
        price:"$200"
    }
]

app.get('/books',(req,res)=>{
    return res.status(200).json(books)
})

app.post('/books', (req,res)=>{
    const book=req.body
    book.id=books.length + 1
    books.push(book)
    return res.status(201).json(books)
})


app.listen(30000,()=>{
    console.log("server started at port 3000")
})