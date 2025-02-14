import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    emailaddress:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true,
    },
    cellphone:{
        type:Number,
        required:true,
    },
   profilepicture:{
       type:String,
        default:"",
   },
},{timestamps:true});

const User = mongoose.model("User",userSchema);
export default User;