import React from 'react'
import {IMG_CDN_URL} from '../utils/constants'

const MovieCard = ({posterpath}) => {
  
  return (
    <div>
      <div className='w-[150px] px-2'>
        <img src={IMG_CDN_URL+posterpath} alt="" />
      </div>
    </div>
  )
}

export default MovieCard
