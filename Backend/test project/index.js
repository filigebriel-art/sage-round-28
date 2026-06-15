const express= require('express')
const app =express()


app.use(express.json())
app.get("/",(req,res)=>{
    return res.send("welcome")
})


app.get("/about",(req,res)=>{
    return res.send("welcome to about page!!! well")
})

app.post('/login',(req,res)=>{
    return res.send("login succsessfully")
})

app.put("/users", (req,res)=>{
    return res.send("user updated")


})


app.delete("/users",(req,res)=>{
    return res.send("user deleted")

})



//params

app.delete("/users/:id",(req,res)=>{
    return res.send("user deleted with ID "+ req.params.id)
})

//query

app.get('/search',(req,res)=>{
    return res.send("searching  "+ req.query.q + " and " + req.query.z)
})

//body

app.post('/users',(req,res)=>{

    const user=req.body
    return res.send("user created with fullname "+ user.fullName +" " + user.lastName)
})

app.listen(3000,()=>{
    console.log(" server started on port 3000")
})