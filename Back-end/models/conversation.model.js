import mongoose from "mongoose";

const conversationCollection = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
      },
    ],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],

    conversation: [
      {
        type: mongoose.Schema.Types.ObjectId,  
        ref: "User", 
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversation = mongoose.model("conversation", conversationCollection);
export default conversation;
