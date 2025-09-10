import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearch } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((store)=>store.user)
const handleclick=()=>{
    signOut(auth).then(() => {
}).catch((error) => {
navigate("/error")
});
}

const handlegptSearch=()=>{
  dispatch(toggleGptSearch())
}



  return (
     <div className=' w-full   bg-gradient-to-b from-black  flex justify-between h-30'> 
      <img className='w-[140px] h-[80px] '
       src={LOGO}
       alt="netflix" />
       {user&&(<div>
        <button className='bg-purple-600 px-4 py-2 rounded-lg font-bold mr-6' onClick={handlegptSearch}>gpt search</button>
        <button onClick={handleclick} className='mr-5 p-2 bg-red-500 text-white font-bold h-10 mt-3 rounded-[5px] cursor-pointer  '>
          sign out </button>
         </div> )
        }
    </div>
    
  )
}

export default Header
