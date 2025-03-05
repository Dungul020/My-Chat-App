// 

import { useAuthContext } from "../../src/context/authcontext.jsx";
import useConversation from "../../pages/Zustand/userconversation.js";
import { extractTime } from "../../src/utils/extracttime.js";
import { Avatar, Badge } from "@material-tailwind/react";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser?.id;
  const chatClassName = fromMe ? "flex flex-row-reverse items-center" : "flex flex-row items-center";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe ? authUser?.profilepicture : selectedConversation?.profilepicture;
  const bubbleBgColor = fromMe ? "bg-blue-500 text-white" : "bg-gray-300 text-black";
  const shakeClass = message.shouldShake ? "animate-shake" : "";

  return (
    <div className={`w-full my-2 ${chatClassName} gap-3`}>
      {!fromMe && (
        <Badge placement="top-end" overlap="circular" color="green" withBorder>
          <Avatar img={profilePic} rounded className="w-8 h-8" alt="User Profile" />
        </Badge>
      )}

      <div className={`px-4 py-2 rounded-lg ${bubbleBgColor} ${shakeClass} max-w-xs`}>
        {message.messageContent}
      </div>

      {fromMe && (
        <Badge placement="top-end" overlap="circular" color="green" withBorder>
          <Avatar img={profilePic} rounded className="w-8 h-8" alt="My Profile" />
        </Badge>
      )}
      
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  );
};

export default Message;