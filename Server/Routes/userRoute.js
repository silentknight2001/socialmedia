const express = require("express");
const {getUser,updateUser, userDelete, followUser, UnfollowUser} = require("../Controller/userControler");


const router = express.Router()


router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", userDelete)
router.put("/:id/follow", followUser)
router.put("/:id/unfollow", UnfollowUser)


module.exports=router;
