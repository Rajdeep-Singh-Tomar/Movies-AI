import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

  const Header = () => {
 const navigate = useNavigate();
   const handleclick=()=>{
    signOut(auth).then(() => {
   navigate("/")
    }).catch((error) => {
  navigate("/error")
    });
   }
  return (
     <div className='absolute w-full   bg-gradient-to-b from-black z-10 flex justify-between h-18'> 
      <img className='w-[140px] ' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="netflix" />
       <button onClick={handleclick} className='mr-5 p-2 bg-red-500 text-white font-bold h-10 mt-3 rounded-[5px] cursor-pointer  '>sign out </button>
    </div>
    
  )
}

export default Header
