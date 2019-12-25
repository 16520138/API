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
    name :{
        type: String,
        required: false,
    },
    address :{
        type: String,
        required: false,
    },
    age :{
        type: Number,
        required: false,
    },
});


module.exports = mongoose.model("Users", Userchema); 