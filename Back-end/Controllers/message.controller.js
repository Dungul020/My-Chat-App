import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; 
    const { id: receiverId } = req.params;
    const senderId = req.user._id; 

    let ConversationInstance = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!ConversationInstance) {
      ConversationInstance = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      messageContent:message,
    });

    ConversationInstance.messages.push(newMessage._id);

    
    await ConversationInstance.save();
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



export const  getMessage = async (req,res) =>{
  try {
    
    const {id : userToChatId} = req.params;
    const senderId = req.user._id;
    
   const ConversationInstance = await Conversation.findOne({
      participants : {$all : [senderId,userToChatId]},
  }).populate('messages')




    if(!ConversationInstance){
     return  res.status(200).json([]);
      }
      res.status(201).json(ConversationInstance.messages);
    

     

  } catch (error) {
    console.log("error in getmessage controller" ,  error.message); 
    res.status(500).json({error:"Internal server error"});
  }
}