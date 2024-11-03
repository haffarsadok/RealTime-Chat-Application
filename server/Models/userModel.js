const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{type: String,required: true, minlength: 3, maxlength: 30},
    email:{type: String,required: true, minlength: 3, maxlength:200,unique: true},
    password:{type: String,required: true, minlength: 3, maxlength:1024 },

},{
    timestamps: true, //this will create createdAt and updatedAt fields automatically
});

const userModel = mongoose.model("User",userschema)

module.exports = userModel;