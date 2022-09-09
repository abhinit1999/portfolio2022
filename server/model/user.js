const mongoose = require("mongoose");

const newUser = mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,

    },
    phone:{
        type:Number,

    },
    message:{
        type:String,

    },
})

const User = new mongoose.model("User",newUser);

module.exports=User;