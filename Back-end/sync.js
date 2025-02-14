
import mongoose from "mongoose";
import User from './models/index.js';

mongoose.connect(process.env.DB_MONGO_URL)
.then(()=>{
    console.log("Succesfully connected to mongodb");
})
.catch((err)=>{
    console.log("Error connecting to mongoDB2:", err);
})

export {User};