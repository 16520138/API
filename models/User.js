const mongoose = require('mongoose');

const Userchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname :{
        type: String,
        required: true,
    },
    lastname :{
        type: String,
        required: true,
    },
    company :{
        type: String,
        required: false,
    },
    jobtitle :{
        type: String,
        required: false,
    },
    phone :{
        type: String,
        required: false,
    },
    street :{
        type: String,
        required: false,
    },
    city :{
        type: String,
        required: false,
    },
    age :{
        type: Number,
        required: false,
    },
    avatar :{
        type: String,
        required: false,
    },
    
});


module.exports = mongoose.model("Users", Userchema); 