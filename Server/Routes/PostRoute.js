const express = require("express");
const {createPost,getPost, updatePost, deletePost, likesDislikesPost, getTimeLinePost} = require("../Controller/PostControler");


const router = express.Router();


router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likesDislikesPost)
router.get('/:id/timeline', getTimeLinePost)




module.exports = router