const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all POSTS
router.get('/', async (req,res) =>{
    try{
     const posts = await Post.find();
     res.json(posts); 
    }catch(err){
    res.json({message: err});
    }
});

//get specific POST
router.get('/:postId', async (req,res) =>{
    try{
        console.log(req.params.postId);
        const post = await Post.findById(req.params.postId);
        res.send(post);
    }catch(err) {
        res.json({message: err});
    }
});


//submit a POST
router.post('/', async (req,res) =>{
    console.log('call post');
    const post = new Post({
        title: req.body.title,
        description : req.body.description
    });
    try {
     const savedPost = await post.save();
     res.json(savedPost);
    } catch (err){
     res.json({message: err});
    }
    

/*   .then(data => {
       res.json(data);
   })
   .catch(err => {
       res.json({message : err});
   })
   */
});


module.exports = router;