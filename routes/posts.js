const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all POSTS
router.get('/', async (req,res) =>{
    console.log('get all posts');
    try{
     const posts = await Post.find();
     var datares = {
         "code" : 1,
         "length": posts.length,
         "data": posts,
     }
     res.send(datares);
    }catch(err){
    res.json({message: err});
    }
    
});

//get specific POST
router.get('/:email', async (req,res) =>{
    try{
        console.log(req.params.email);
        const posts = await Post.find({email: req.params.email});
        var datares = {
            "code" : 1,
            "length": posts.length,
            "data": posts,
        }
        res.send(datares);
    }catch(err) {
        res.json({message: err});
    }
});


//submit a POST
router.post('/', async (req,res) =>{
    console.log('call add post');
    const post = new Post({
        email: req.body.email,
        title : req.body.title,
        image : req.body.image,
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