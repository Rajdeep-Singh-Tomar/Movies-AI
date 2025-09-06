import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovie = ()=>{
    const dispatch = useDispatch();

   const PopularMovies = async()=>{
    const promise = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const data = await promise.json();
     
    dispatch(addPopularMovies(data.results))
  }


  useEffect(() => {
    PopularMovies();
  }, [])
  
}

export default usePopularMovie;