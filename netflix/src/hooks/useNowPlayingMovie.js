import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovie = ()=>{
    const dispatch = useDispatch();

   const nowPlayingMovies = async()=>{
    const promise = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const data = await promise.json();
   
    dispatch(addNowPlayingMovies(data.results))
  }


  useEffect(() => {
    nowPlayingMovies();
  }, [])
  
}

export default useNowPlayingMovie;