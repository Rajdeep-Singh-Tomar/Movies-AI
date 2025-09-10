import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
    showGptSearch:false,
    gptMovies:null,
    movieName:null
    },

    reducers:{
        toggleGptSearch:(state)=>{
           state.showGptSearch=! state.showGptSearch;
        },
          addGptMovieResult:(state,action)=>{
           state.gptMovies=action.payload;
        },
          addMovieName:(state,action)=>{
           state.movieName=action.payload;
        },
    }
})


export const {toggleGptSearch,addGptMovieResult,addMovieName} = gptSlice.actions;
export default gptSlice.reducer;