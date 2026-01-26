import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch } from 'react-redux'
import { addMovie } from '../utils/movieSlice';
import { Link } from 'react-router-dom';

const MovieList = ({title,movie}) => {
 const dispatch = useDispatch();
  const handleClick=(mov) =>{
   dispatch(addMovie(mov))
   console.log(mov)
  }
  
    
  return (
    <div className='bg-gray-900 text-white' >
      <div className='px-4' >
        <h1 className='text-3xl py-2 ml-2'>{title}</h1>
        < div className='flex  overflow-x-scroll no-scrollbar '  >
              {movie?.map((mov) => (
         <Link to='/movie'>< div
              key={mov.id}
              onClick={() => handleClick(mov)} // attach click on each card
              className="cursor-pointer"
            >
              <MovieCard posterpath={mov.poster_path} />
          </div></Link> 
          ))}
          
            </div>
      </div>
    </div>
  )
}

export default MovieList
