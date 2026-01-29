import React, { useRef } from 'react'
import genAI from '../utils/Openai'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResult, addMovieName } from '../utils/gptSlice'

const GptSearchbar = () => {
  const dispatch =  useDispatch();
  const searchText = useRef(null)

  const searchTMDB = async(movie)=>{
      const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
      const data = await response.json();

      return data.results;
  }

const handleSearchClick=async()=>{
   const query = searchText.current.value
    if (!query) return
    console.log("Searching for:", query)


    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite"})

   
    const prompt = `act as a movie recommendation system and suggest some movie for this query : "${query}".
    only give me name of 5 movie comma separeted `

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: "Hello!" }] },
        { role: "model", parts: [{ text: "Ahoy matey! ☠️" }] },
      ],
    })

    const response = await chat.sendMessage(prompt)
    const text = response.response.text()
    console.log("Gemini reply:", text)

    const gptMovies= text.split(",");
    console.log(gptMovies);
    dispatch(addMovieName(gptMovies));

    const movies = gptMovies.map((movie)=>searchTMDB(movie));

    const results = await Promise.all(movies);
    console.log(results)
    dispatch(addGptMovieResult(results))
}

  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='bg-black w-1/2 flex justify-center rounded-lg gap-5'  onSubmit={(e)=>e.preventDefault()} >
        <input ref={searchText} className='bg-white py-2 px-4 my-3 w-120  rounded-lg' type="text"placeholder='What You Want To Watch Today!!' />
        <button className='text-white bg-red-700 rounded-lg py-2 px-4 my-3 w-50' onClick={handleSearchClick} >Search</button>
      </form>
    </div>
  )
}

export default GptSearchbar;
