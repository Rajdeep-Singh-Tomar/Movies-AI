import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryComponent = () => {
  const movie = useSelector(store=>store.movies)
  return (
    movie.NowPlayingMovies &&
   ( <div className="relative z-20 -mt-59">
      <MovieList title={"Now playing"} movie={movie.NowPlayingMovies}/>
      <MovieList title={"Popular"} movie={movie.PopularMovies}/>
      <MovieList title={"Action"} movie={movie.NowPlayingMovies}/>
      <MovieList title={"Thriller"} movie={movie.NowPlayingMovies}/>
      <MovieList title={"Darma"} movie={movie.NowPlayingMovies}/>
     
    </div>)
  )
}

export default SecondryComponent
