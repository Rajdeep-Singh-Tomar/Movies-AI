import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        TrailorVideo:null,
        PopularMovies:null,
        Movie:null,

    },

    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.NowPlayingMovies =  action.payload;
        },
        addTrailorVideo:(state,action)=>{
             state.TrailorVideo = action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.PopularMovies =  action.payload;
        },
         addMovie:(state,action)=>{
           state.Movie=action.payload;
        },
    }
})

export const {addNowPlayingMovies, addTrailorVideo,addPopularMovies,addMovie} = movieSlice.actions;

export default movieSlice.reducer