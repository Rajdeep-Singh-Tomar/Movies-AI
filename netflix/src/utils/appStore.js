import {configureStore} from '@reduxjs/toolkit'
import useReducer  from './useSlice';
import movieReducer from './movieSlice'

const appStore = configureStore(
    {
        reducer:{
            user:useReducer,
            movies:movieReducer,
        }
    }
);

export default appStore;