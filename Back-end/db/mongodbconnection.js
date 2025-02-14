import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_MONGO_URL);
    console.log("Succesfully connected to mongodb");
  } catch (error) {
    console.log("Error connecting to mongoDB:", error);
  }
}

// const mongodbconnection = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL);
//         console.log("Succesfully connected to mongodb");
//     } catch (error) {
//       console.log("ERR_CONNECTION_DB",error.message);  
//     }
// };

export default connectDB;