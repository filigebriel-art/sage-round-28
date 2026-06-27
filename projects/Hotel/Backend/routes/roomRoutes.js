import express from "express";
import {
    getRooms,
    createRoom,
    deleteRoom,
    updateRoom,
    getRoomById
} from "../controllers/roomController.js";

import upload from "../middleware/upload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRooms);

router.get("/:id", getRoomById);

router.post(
    "/",
    protect,
    upload.single("image"),
    createRoom
);

router.put(
    "/:id",
    protect,
    upload.single("image"),
    updateRoom
);

router.delete(
    "/:id",
    protect,
    deleteRoom
);

export default router;