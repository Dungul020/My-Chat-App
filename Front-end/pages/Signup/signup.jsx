

import { Link } from "react-router-dom";
import GenderCheckbox from "../Signup/checkbox.jsx"
import { useState } from "react";
import useUserSignUp from "../../src/hooks/usersignup.js";

 const Signup = () => {
    const [inputs,setInputs]= useState({
        fullname:"",
        username:"",
        emailaddress:"",
        password:"",
        confirmpassword:"",
        cellphone:"",
        gender:""
    } )

    const {loading , signup} = useUserSignUp()

    const handleCheckBox =(gender)=>{
       setInputs({...inputs,gender})
    }



    const handleSubmit = async (e)=>{
        e.preventDefault();
        signup(inputs);
        
    }
        return (
          <div className="flex flex-col items-center justify-center min-w-100 mx-auto">
           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-50">
    <h1 className="text-3xl font-semibold text-center text-black">
    <span className="text-orange-400">My-Chat </span>
    Signup 
    </h1>

    <h1 className="text-3xl font-semibold text-center text-black">

    <span className="">Fill in the form to create your account </span>
    
    </h1>
    
    <form onSubmit={handleSubmit}>
    
    <div>
    <label className="input input-bordered flex items-center p-2">
   
   <input type="text" className="grow h-10" placeholder="Enter fullname" 
   value={inputs.fullname}
   onChange={(e)=>setInputs({...inputs , fullname:e.target.value})}
   />
 </label>
    
    <label className="input input-bordered flex items-center p-2">
   
      <input type="text" className="grow h-10" placeholder="Enter your username"
      value={inputs.username}
      onChange={(e)=>setInputs({...inputs , username:e.target.value})}
      />
    </label>
    <label className="input input-bordered flex items-center p-2">
   
   <input type="email" className="grow h-10" placeholder="Enter your emailaddress" 
   value={inputs.emailaddress}
   onChange={(e)=>setInputs({...inputs , emailaddress:e.target.value})}
   />
 </label>
    <label className="input input-bordered flex items-center p-2">
     
      <input type="password" className="grow h-10" placeholder="Enter your password" 
      value={inputs.password}
      onChange={(e)=>setInputs({...inputs , password:e.target.value})}
      />
    </label>
    <label className="input input-bordered flex items-center p-2">
     
      <input type="password" className="grow h-10" placeholder="Confirm  your password" 
      value={inputs.confirmpassword}
      onChange={(e)=>setInputs({...inputs , confirmpassword:e.target.value})}
      />
    </label>
    <label className="input input-bordered flex items-center p-2">
   
   <input type="text" className="grow h-10" placeholder="Enter your cellphone"
   value={inputs.cellphone}
   onChange={(e)=>setInputs({...inputs , cellphone:e.target.value})}
   />
 </label>

    <GenderCheckbox onCheckBoxChange={handleCheckBox} selectedGender={inputs.gender}/>
    
    <div className="flex justify-center items-center">
    <button className="btn btn-block bg-orange-500 text-white border-orange-500 h-10 w-50 p-2" disabled={loading} >Sign up</button>
    </div>
    <div>Already have an account? <Link to={"/login"} className=" link link-primary link-hover"> LOGIN</Link></div>
    
    </div>
    </form>
    
            </div>
          </div>
        );
      };
      
      export default Signup;