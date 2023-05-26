const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user", "admin"],
            default:"user"
        }
    },
    {
        timestamps:true, //Todo createAt, updateAt
        versionKey:false
    }
);

const UserModel = mongoose.model('users' ,UserSchema);
