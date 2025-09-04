import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        TrailorVideo:null

    },

    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.NowPlayingMovies =    action.payload;
        },
        addTrailorVideo:(state,action)=>{
             state.TrailorVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailorVideo} = movieSlice.actions;

export default movieSlice.reducer