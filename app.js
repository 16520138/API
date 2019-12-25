const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import ROUTE
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Middlewares

/*
app.use('/posts', ()=>{
 console.log('Middle wares running');
});
*/
//ROUTES
app.get('/', (req,res)=>{
    res.send('We are home');
});



//Connect to db


//mongodb+srv://admin:123@cluster0-y3dz2.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://admin:123@cluster0-xmznc.azure.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true },() =>
{
 console.log('Connect DB');
});


//Start server
//app.listen(3000);
app.listen(process.env.PORT || 3000);