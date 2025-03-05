
import  { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';

const useUserSignUp = () => {
  
    const [loading,setLoading] =  useState(false);
    const {setAuthUser} = useAuthContext();
    const signup = async ({fullname,username,emailaddress,password,confirmpassword,cellphone,gender}) => {
     const success = handleInputErrors({fullname,username,emailaddress,password,confirmpassword,cellphone,gender})
     if(!success) return; 
     setLoading(true);

     try {
        
        const res = await fetch("/api/signup",{
            method:"POST",
            headers :{"Content-Type":"application/json"},
            body : JSON.stringify({fullname,username,emailaddress,password,confirmpassword,cellphone,gender})
          
            
        })
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem("My-Chat", JSON.stringify(data));
			setAuthUser(data);
        console.log(data);
        
     } catch (error) {
        
        toast.error(error.message)
        
     }
     finally{
        setLoading(false);
     }
    
    };
    return {loading,signup};

};

export default useUserSignUp;

function  handleInputErrors ({fullname,username,emailaddress,password,confirmpassword,cellphone,gender}) {
    if (!fullname || !username || !emailaddress || !password || !confirmpassword || !cellphone || !gender ) {
       toast.error ("Please fill in all the fields")
       return false;
    
        
    }
    if (password !== confirmpassword) {
    
       toast.error("password do not match")
       return false;
    }
    if (password.length < 6) {
        toast.error("Password must be atleast 6 character long")
        return false;
        
    }
    return true;
}