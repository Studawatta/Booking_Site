import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/",createHotel);

//Update

router.put("/:id", verifyAdmin ,updateHotel);

//Delete

router.delete("/:id", verifyAdmin , deleteHotel);

//Get one
router.get("/find/:id",getHotel);

//Get All

router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);

export default router;