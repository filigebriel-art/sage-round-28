import express from "express"

import { 
    createBooking,
    getBookings,
    deleteBooking,
    getUserBookings } from "../controllers/bookingController.js"


const router = express.Router()


router.post("/",createBooking)
router.get("/",getBookings)

router.delete("/:id",deleteBooking)

router.get("/user/:userId", getUserBookings)


export default router