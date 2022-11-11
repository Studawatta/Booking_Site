import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user, you are logged in");
})

//Update

router.put("/:id",updateUser);

//Delete

router.delete("/:id",deleteUser);

//Get one
router.get("/:id",getUser);

//Get All

router.get("/",getUsers);

export default router;