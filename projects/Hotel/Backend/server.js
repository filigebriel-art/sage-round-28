import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import roomRoutes from "./routes/roomRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"
import reviewRoutes from "./routes/reviewRoutes.js"
import { fileURLToPath } from 'url';
import path from "path"
import galleryRoutes from './routes/galleryRoutes.js';


// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("Hotel Api Running")
})

app.use("/api/users",userRoutes)

app.use("/api/rooms",roomRoutes)

app.use("/api/bookings",bookingRoutes)

app.use("/api/reviews",reviewRoutes)

app.use("/uploads", express.static(path.join(__dirname, "uploads")))











app.listen(5000,()=>{
    console.log("Server running on port 5000")
})