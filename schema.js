const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        
    },
    email:{
        type : String,
        required : true,
       
    },
    password :{
        type : String,
        required : true
    },
    status :{
        type : Boolean,
        required : true
    }
})

const Customer = new mongoose.model("Customer",userSchema);
module.exports =  Customer;