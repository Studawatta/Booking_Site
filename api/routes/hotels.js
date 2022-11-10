import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//Create
router.post("/",createHotel);

//Update

router.put("/:id",updateHotel);

//Delete

router.delete("/:id",deleteHotel);

//Get one
router.get("/:id",getHotel);

//Get All

router.get("/",getHotels);

export default router;