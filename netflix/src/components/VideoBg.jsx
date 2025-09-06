import React, { useEffect,useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailorVideo } from '../utils/movieSlice';

const VideoBg = ({ movieid }) => {
   const dispatch = useDispatch();
   const trailerVideo = useSelector(store=>store.movies?.TrailerVideo);
   const [trailerVid, settrailerVid] = useState(null)
  
  const movie = async () => {
    const promise = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', API_OPTIONS);
    const data = await promise.json();
    


    const trailer = data.results[0];
    
    dispatch(addTrailorVideo(trailer));
    settrailerVid(trailer.key)
  }
  

  useEffect(() => {
    movie();
  }, [])

  return (
    <div >
      <iframe 
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVid+"?&autoplay=1&mute=1"}
       
       title="YouTube video player" 
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" >

         </iframe>

    </div>
  )
}



export default VideoBg;
