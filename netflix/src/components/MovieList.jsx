import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movie}) => {
    
  return (
    <div className='bg-gray-900 text-white' >
      <div className='px-4' >
        <h1 className='text-3xl py-2 ml-2'>{title}</h1>
        <div className='flex  overflow-x-scroll no-scrollbar '>
            {movie?.map(mov=>  <MovieCard key={mov.id} posterpath={mov.poster_path}/>)}
          
            </div>
      </div>
    </div>
  )
}

export default MovieList
