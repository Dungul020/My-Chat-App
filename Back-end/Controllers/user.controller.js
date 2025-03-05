import User from "../models/User.js";

export const getUserSideBar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id; 

        const allUser = await User.find({ _id :{$ne: loggedInUserId}}).select("-password -confirmpassword");

        return res.status(200).json(allUser);

    } catch (error) {
        console.log(error)
       return res.status(500).json({error:"Internal Server Error"});
        console.log("error in getuser controller" ,  error.message); 
        
    }
    
}