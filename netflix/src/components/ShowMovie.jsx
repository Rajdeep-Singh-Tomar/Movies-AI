import React from "react";

import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import Header from "./Header";

const ShowMovie = () => {
  
  const movie = useSelector((state) => state.movies.Movie);

  if (!movie) {
    return (
      <div className="text-white p-4">
        <h1>No movie found in store</h1>
        <p>Try selecting a movie again.</p>
      </div>
    );
  }

  return (
    <>
    <div className="absolute w-full">
    <Header/></div>
    <div className="text-white p-4 bg-red-400 h-screen ">
      <img
        src={IMG_CDN_URL+movie.poster_path}
        alt={movie.title}
        className="rounded-lg m-auto w-[200px] mt-6"
      />
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2">{movie.overview}</p>
    </div>
    </>
  );
};

export default ShowMovie;
