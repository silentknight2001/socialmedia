const PostModel = require("../Models/Postmodels");
const mongoose = require("mongoose");
const UserModel = require("../Models/Usermodel");

const createPost = async (req, res) => {
  // const newPost = req.body;  // this is old model
  const newPost = new PostModel(req.body); // this is new model oneLiner\

  try {
    await newPost.save();
    res.status(200).send({ massage: "post created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a post

const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    if (post) {
      res.status(200).send(post);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//update a post

const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send({ message: "Doesnot exits this user" });
    }
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).send({ message: "post updated" });
    } else {
      res
        .status(403)
        .send({ message: "Action forbiden! only user can update the post" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete a post

const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).send({ message: "Doesnot exits this user" });
    }
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).send({ message: "Deleted post successfully" });
    } else {
      res
        .status(403)
        .send({ message: "Action forbiden! only user can delete the post" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// likes and dislikes the post

const likesDislikesPost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    //liked post
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).send({ message: "Post Liked" });
    } else {
      // unlikepost
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).send({ message: "Post UnLiked" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// get timeLine post



const getTimeLinePost = async (req, res) => {
  const userId = req.params.id;
  
  try {
    const currentUserPost = await PostModel.find({ userId: userId });
    console.log( currentUserPost )
    const followingPost = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        }
      },
      {
        $unwind: '$following'
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        }
      },
      {
        $unwind: '$followingPosts'
      },
      {
        $group: {
          _id: "$followingPosts._id",
          userId: { $first: "$followingPosts.userId" },
          content: { $first: "$followingPosts.content" },
          createdAt: { $first: "$followingPosts.createdAt" }
        }
      },
      // Did not understood use of followingPost below
      // {
      //   $project: {
      //     followingPost: 1,
      //     _id: 0
      //   }
      // },
      {
        $project: {
          _id: 0,
          userId: 1,
          content: 1,
          createdAt: 1
        }
      },
    ])

    /**
     * Always add a check that if you are getting the expected data or not
     * In below case we are expecting an array which contain followingPost
     * But, before getting it we should properly check whether the array have any data or not
     * below code could also be written as ->
     * const followingPosts = followingPost && followingPost.length > 0 ? followingPost[0].followingPost : []
     */

    const followingPosts = followingPost[0]?.followingPost || [];

    console.log('debugging',followingPost);
    // console.log(`chatGpt suggetion:---........  ${followingPosts}`);
    
    res.status(200).json(currentUserPost.concat(followingPost)
.sort((a,b)=>{
        return b.createdAt - a.createdAt 
      }));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


module.exports = {createPost,
getPost,updatePost,deletePost,likesDislikesPost,getTimeLinePost};

