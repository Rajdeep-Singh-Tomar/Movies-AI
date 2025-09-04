import { useEffect, useState } from 'react'
import './App.css';
 import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import Login from './components/Login'
import Browser from './components/Browser'
import { Route,Routes, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { addUser, removeUser } from './utils/useSlice';


function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    navigate("/browser")
   } else {
   dispatch(removeUser());
   navigate("/");
    }
   });

   return() => unsubscribe();
  },[])

  return (
      <div>
        <Routes>
        <Route
         path="/"
          element = <Login/> />

          <Route
         path="/browser"
          element = <Browser/> />
         
           
          
     </Routes>
    </div>
   
  )
}

export default App
