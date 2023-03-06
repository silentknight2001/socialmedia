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
  const id = req.params.id.trim();
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
    if (!mongoose.Types.ObjectId.isValid(postId)) { //for id getting or not
     return res.status(404).send({ message: "Invalid post id" });
    }
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send({ message: "Doesnot exits this user" });
    }
    if (post.userId.toString() === userId.toString()) {
      await post.updateOne({ $set:req.body});
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
    if (!mongoose.Types.ObjectId.isValid(id)) { //for id getting or not
      return res.status(404).send({ message: "Invalid post id" });
     }
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).send({ message: "Doesnot exits this user" });
    }
    if (post.userId.toString() === userId.toString()) {
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

// const getTimeLinePost = async (req, res) => {
//   const userId = req.params.id.toString();
  
//   try {
//     const currentUserPost = await PostModel.find({ userId: userId });
//     console.log( currentUserPost )
//     const followingPost = await UserModel.aggregate([
//       {
//         $match: {
//           _id: new mongoose.Types.ObjectId(userId),
//         }
//       },
//       {
//         $unwind: '$following'
//       },
//       {
//         $lookup: {
//           from: "posts",
//           localField: "following",
//           foreignField: "userId",
//           as: "followingPosts",
//         }
//       },
//       {
//         $unwind: '$followingPosts'
//       },
//       {
//         $group: {
//           _id: "$followingPosts._id",
//           userId: { $first: "$followingPosts.userId" },
//           desc: { $first: "$followingPosts.content" },
//           createdAt: { $first: "$followingPosts.createdAt" }
//         }
//       },
    
//       {
//         $project: {
//           _id: 0,
//           _id: 1,
//           desc: 1,
//           createdAt: 1
//         }
//       },
//     ])
   
//     const followingPosts = followingPost[0]?.followingPost || [];
  
//     console.log(`debugging  ${JSON.stringify(followingPost)}`);
    
//     res.status(200).json(currentUserPost.concat(followingPost)
// .sort((a,b)=>{
//         return b.createdAt - a.createdAt 
//       }));
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// };

const getTimeLinePost = async (req, res) => {
  const userId = req.params.id.toString();
  
  try {
    const currentUserPost = await PostModel.find({ userId: userId });
    const followingPost = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        }
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
        $project: {
          _id: '$followingPosts._id',
          userId: '$followingPosts.userId',
          desc: '$followingPosts.desc',
          createdAt: '$followingPosts.createdAt',
        }
      },
    ]);
    
    const timelinePosts = currentUserPost.concat(followingPost)
      .sort((a,b) => b.createdAt - a.createdAt);
    
    res.status(200).json(timelinePosts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/*
In this solution, I removed the $unwind and $group stages from the followingPost aggregation pipeline since we are only interested in the fields from the Posts collection. Instead, I added a $project stage to transform the fields of the followingPosts documents to match the fields of the Post model.

I also updated the timelinePosts array to include both the currentUserPost and followingPost arrays, sorted by the createdAt field in descending order.
*/


module.exports = {createPost,
getPost,updatePost,deletePost,likesDislikesPost,getTimeLinePost,};

