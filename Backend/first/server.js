import express from "express";
import connectDB from "./config/db.js";
import roomRoutes from "./routes/roomRoutes.js";
import userRoutes from "./routes/userRoutes.js"


const app = express()
connectDB()

app.use(express.json())

app.use("/rooms",roomRoutes)

app.use("/users",userRoutes)

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})