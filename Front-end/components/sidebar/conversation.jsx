import React from 'react'
import useConversation from '../../pages/Zustand/userconversation.js';

function Conversation({conversation,lastIdx,emoji}) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (

    <div 
    className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
    onClick={() => setSelectedConversation(conversation)} 
  >
  

<div className='flex flex-col flex-1'>

  <div className='flex gap-3 justify-between'>
    <p className='font-bold text-white'>{conversation.fullname}</p>
    <span>{emoji}</span>
  </div>

</div>
<div className="relative">
  <div className="w-12 h-12 rounded-full overflow-hidden">
    <img src={conversation.profilepicture} alt="profilepic" className="w-full h-full object-cover" />
  </div>
 {/* Online status indicator (always online) */}
 <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>


<div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default Conversation;
