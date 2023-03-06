const UserModel = require("../Models/Usermodel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


// get a singel user

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetailes } = user._doc;
      res.status(200).send(otherDetailes);
    } else {
      res.status(404).send("not exist user");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//update user

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id !== currentUserId && !currentUserAdminStatus){
    res.status(400).send({ message: 'Invalid ID' });
  } else {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const updatedUser = await UserModel.findByIdAndUpdate(mongoose.Types.ObjectId(id), req.body,{
        new: true,
        runValidators: true
      });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.json(updatedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

//delete a user

const userDelete = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (currentUserId === id || currentUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndDelete({_id: mongoose.Types.ObjectId(id)});
      
      res.status(200).send("Successfully Deleted");
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(403).send("Access Denied! you can only Delete your own profile");
  }
};

//Follw a user 

const followUser = async (req, res) => {
  const id = req.params.id.trim();
  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).send("Action forbiden");
  } else {
    try {
      // const followUser = await UserModel.updateOne(id); // its not working old model
      // const followingUser = await UserModel.updateOne(currentUserId);
      const followUser = await UserModel.findById((id)); // new model.... 
      const followingUser = await UserModel.findById(currentUserId);


      if (!followUser.followers.includes(currentUserId)) {
      
        await followUser.updateOne({ $push: { followers:mongoose.Types.ObjectId(currentUserId)}});
        await followingUser.updateOne({ $push: { following:mongoose.Types.ObjectId(id)}});
        res.status(200).send({message:"User Followed"});
        res.status(200).send({message:"User UnFollowed"});
    
    }else{
        res.status(403).send({message:"User alredy followed by you!"});
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};




//UnFollw a user 

const UnfollowUser = async (req, res) => {
  const id = req.params.id.trim();
  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).send("Action forbiden");
  } else {
    try {
      const followUser = await UserModel.findById({_id: mongoose.Types.ObjectId(id)});
      const followingUser = await UserModel.findById({_id: mongoose.Types.ObjectId(currentUserId)});

      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers:mongoose.Types.ObjectId(currentUserId)} });
        await followingUser.updateOne({ $pull: { following:mongoose.Types.ObjectId(id)}});
        res.status(200).send({message:"User UnFollowed"});
      } else {
        res.status(403).send({message:"User not followed by you!"});
      }
    } catch (error) {
  
      res.status(500).send(error);
    }
  }
};



module.exports = { getUser, updateUser, userDelete, followUser, UnfollowUser };

