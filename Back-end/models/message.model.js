import mongoose, { MongooseError } from "mongoose";

const messageCollection =  new mongoose.Schema({
senderId:{
    type:mongoose.Schema.type.ObjectId,
    ref:"user",
    required:true,

},

recieverId:{
    type:mongoose.Schema.type.ObjectId,
    ref:"user",
    required:true,

},

messageId:{
    type:String,
    required:true,

},

},{timestamps:true});

const message = mongoose.model("message",messageCollection);

export default message ;