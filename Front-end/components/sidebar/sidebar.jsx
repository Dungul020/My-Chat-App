

import React from 'react'
import SearchInput from "./searchinput.jsx";
import Conversations from './conversations.jsx';
import Logoutbutton from './logoutbutton.jsx';


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
    
    <SearchInput />
			<div className='divider px-3'></div>
      <Conversations />
      <Logoutbutton/>
    </div>
  )
}

export default Sidebar;