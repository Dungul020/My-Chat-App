
import conversation from "../models/conversation.model.js";


export const  sendMessage = async (req,res) =>{
  try {
    const {message} = req.body;
    const {id : recieverId} = req.params;
    const {userId} = req.user._id;
   let Conversation = await conversation.findOne({
        participants : {$all : [senderId,recieverId]},
    })
    if(!Conversation){
        Conversation = await conversation.create({
            participants : [senderId,recieverId]
    }) }
    const newMessage = new message ({
        senderId,
        recieverId,
        message
    })
    if(newMessage){
        conversation.message.push(newMessage._id)
        res.status(201).json(newMessage);
    }

     await conversation.Save();
     await newMessage.Save();

  } catch (error) {
    console.log("error in sendmessage controller" ,  error.message); 
    res.status(500).json({error:"Internal server error"});
  }
}

export const  getMessage = async (req,res) =>{
  try {
    
    const {id : userToChatId} = req.params;
    const senderId = req.user._id;
    
   const Conversation = await conversation.findOne({
      participants : {$all : [senderId,userToChatId]},
  }).populate('message')




    if(!Conversation){
     return  res.status(200).json([]);
      }
      res.status(201).json(conversation.message);
    

     

  } catch (error) {
    console.log("error in getmessage controller" ,  error.message); 
    res.status(500).json({error:"Internal server error"});
  }
}