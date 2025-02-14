import mongoose from "mongoose";

const conversationCollection = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", // Ensure this matches the actual model name (e.g., "User")
      },
    ],

    conversation: [
      {
        type: mongoose.Schema.Types.ObjectId, // The is a problem here 
        ref: "user", // Again, check if this is the correct reference
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversation = mongoose.model("conversation", conversationCollection);
export default conversation;
