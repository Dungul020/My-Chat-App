import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../src/hooks/userlogout.js';
export const Logoutbutton = () => {
  const {loading,logout} = useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className="h-6 w-6 text-white cursor-pointer" onClick={logout}  />
        ) : (
				<span className='loading loading-spinner'></span>
			)}
        
    </div>
  )
}

export default Logoutbutton;
