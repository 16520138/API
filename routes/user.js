const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all USERS
router.get('/', async (req,res) =>{
    console.log('get all users');
    
    try{
     const users = await User.find();

    var resdata = {
        'code' : 1,
        'data' : users
    }
    res.send(resdata);
     
    }catch(err){
    res.json({message: err});
    }
    
});

//get specific USER
router.get('/:userId', async (req,res) =>{
    try{
        console.log(req.params.userId);
        const user = await User.findById(req.params.userId);
        res.send(user);
    }catch(err) {
        res.json({message: err});
    }
});


//add a USER
router.post('/', async (req,res) =>{
    console.log('call add user');
    const user = new User({
        email: req.body.email,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        company : req.body.company,
        jobtitle : req.body.jobtitle,
        phone : req.body.phone,
        street : req.body.street,
        city : req.body.city,
        age : req.body.age,
        avatar : req.body.avatar,
    });
    try {
     const savedUser = await user.save();
     res.json(savedUser);
    } catch (err){
     res.json({message: err});
    }
});


//login
router.post('/login', async (req,res) =>{
    console.log('call login');
    try{
        console.log(req.body.email);
        console.log(req.body.password);
        const user = await User.findOne({email: req.body.email, password:req.body.password });
    
        if(user == null)
        {
            var resdata = {
                'code' : 0,
                'data' : user
            }
            res.send(resdata);
        }else{
            var resdata = {
                'code' : 1,
                'data' : user
            }
            res.send(resdata);
        }
        
    }catch(err) {
        var resdata = {
            'code' : 0,
            'message' : err
        }
        res.send(resdata);
    }
});


module.exports = router;