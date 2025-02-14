import User from "../models/User";

export const getUserSideBar = async (res,req) => {
    try {
        const loggedInUser = req.user._id
        const allUser = await User.find().select("-password");
        return res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
        console.log("error in getuser controller" ,  error.message); 
        
    }
    
}