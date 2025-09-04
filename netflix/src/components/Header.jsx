import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { useSelector } from 'react-redux';

  const Header = () => {
 const navigate = useNavigate();
 const user = useSelector((store)=>store.user)
   const handleclick=()=>{
    signOut(auth).then(() => {
  }).catch((error) => {
  navigate("/error")
    });
   }
  return (
     <div className=' w-full   bg-gradient-to-b from-black  flex justify-between h-30'> 
      <img className='w-[140px] h-[80px] '
       src={LOGO}
       alt="netflix" />
       {user&&(<button onClick={handleclick} className='mr-5 p-2 bg-red-500 text-white font-bold h-10 mt-3 rounded-[5px] cursor-pointer  '>sign out </button>)}
    </div>
    
  )
}

export default Header
