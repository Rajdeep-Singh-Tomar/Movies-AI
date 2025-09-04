import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' mt-46 ml-16 absolute text-white bg-gradient-to-r from-black w-1/3 p-2 rounded-lg' >
      <h1 className='text-5xl font-bold' >{title}</h1>
      <p className='text-lg mt-5' >{overview}</p>
      <button className='mt-2 bg-white p-3 px-12 text-black text-lg rounded-lg hover:opacity-70 '>Play</button>
      <button className='mt-2 bg-gray-500 p-3 px-12 text-lg ml-6 rounded-lg hover:opacity-70'>More info</button>
    </div>
  )
}

export default VideoTitle
