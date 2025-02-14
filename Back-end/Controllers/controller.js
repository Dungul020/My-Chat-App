import generateToken from "../db/utils/generateToken.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export async function signupUser(req,res){
    try {
        const {fullname,username,emailaddress,password,confirmpassword,gender,cellphone} = req.body;

        if(password!==confirmpassword){
           return  res.status(400).json({error:"Oops passwords do not match try again"});
        }
        const user = await User.findOne({username})
        if(user){
            return  res.status(400).json({error:"Oops it seems like your account already registered  login to acess your account"}); 
        }
        //Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        const maleprofilepic = 'https://avatar.iran.liara.run/public/boy?username=${username}'
        const femaleprofilepic='https://avatar.iran.liara.run/public/girl?username=${username}'

        const newUser = new User({
            fullname,
            username,
            emailaddress,
            gender,
            password:hashedPassword,
            confirmpassword:hashedPassword,
            cellphone,
            profilepic:gender==="male"? maleprofilepic:femaleprofilepic
        })
        if(newUser){
           generateToken(newUser,_id,res);
        }
        await newUser.save();

        res.status(201).json({
            id:newUser._id, //try removing _
            fullname:newUser.fullname,
            username:newUser.username,
            profilepic:newUser.profilepic,
        });

}
 
    catch (error) {
        console.error("Signup Error:", error); // Log the error in your terminal
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
    
    };

export async function loginUser(req,res){

    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const passwordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !passwordCorrect){
            return  res.status(400).json({error:"Oops Invalid  password or username"});   
        }
        generateToken(user._id,res);
        res.status(201).json({
            id:user._id, // remove _
            fullname:user.fullname,
            username:user.username,
           // profilepic:newUser.profilepic,
        });


    } catch (error) {

        console.error("Signin Error:", error); // Log the error in your terminal
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }

};

export const  logoutUser = async (req,res) =>{
    try {
        
        res.cookie("jwt","",{maxAge:0});
         res.status(201).json("You are succesfully logged out");   
    
    } catch (error) {
        console.log("We faced an unepected error during logout",error.message);
    }
};

//export default signupUser;

