import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id",verifyUser  , (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id",verifyUser  , (req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all accounts");
// });

//Update
   
router.put("/:id", verifyAdmin, updateUser);

//Delete

router.delete("/:id", verifyUser, deleteUser);

//Get one
router.get("/:id", verifyUser, getUser);

//Get All

router.get("/",verifyAdmin,getUsers);

export default router;