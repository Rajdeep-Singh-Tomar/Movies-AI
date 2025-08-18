import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import Browser from './components/Browser'
import { Route,Routes } from 'react-router-dom'


function App() {
  

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
