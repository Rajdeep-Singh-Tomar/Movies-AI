import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggestions = () => {
   
    const result = useSelector(store=>store.gpt. gptMovies);
    const name = useSelector(store=>store.gpt.movieName);
     if (!result || !result.length) return("your movies is loading please wait"); 
  return (
    <div className='m-4 p-4 bg-gray-900 bg-opacity-70 bg-grey-900'>
      {result.map((res,index)=> <  MovieList key={index} title={name[index]}  movie={res}/>)}
    </div>
  )
}

export default GptSuggestions
