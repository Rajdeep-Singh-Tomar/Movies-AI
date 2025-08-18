import React from 'react'
import Header from './Header'
import {useState} from 'react'

const Login = () => {
  const [signin, setsignin] = useState(true)
   const handlesignin =()=>{
    setsignin(!signin)
   }

  return (
    <div>
      <div><Header/></div>
       <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
       alt="back image" srcset="" />
       </div>

       <div >
        <form className="bg-black  p-8 absolute my-42 w-3/12 mx-auto right-0 left-0  opacity-95" >
          <h1 className="text-white text-3xl font-bold"> 
            {signin?"SIGN IN":"SIGN UP"} </h1>{signin?"": <input className="border border-amber-50 m-2 p-2 mt-5  bg-gray-500 text-amber-50 w-full rounded-1xl" type="text" placeholder="name" />}
          <input className="border border-amber-50 m-2 p-2 mt-5 bg-gray-500 text-amber-50 w-full rounded-1xl" type="text" placeholder="email adress" />
          <input className="border border-amber-50 m-2 p-2  bg-gray-500 text-amber-50 w-full rounded-1xl" type="password"  placeholder="password" />
          <button className="bg-amber-700 m-4 mx-2 p-4 w-full rounded-1xl"> {signin?"SIGN IN":"SIGN UP"}</button>
          <p  onClick={handlesignin} className="text-white font-bold cursor-pointer"> {signin?"new to netflix ? signup now":"Already Have account? signin"} </p>
        </form>
       </div>
    </div>
  )
}

export default Login
