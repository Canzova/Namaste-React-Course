import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";
const MovieCard = ({ posterUrl, name }) => {
  //console.log(name);
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <div className="w-[18rem] h-[10rem] rounded-lg overflow-hidden">
        <img
          className="h-[100%] w-[100%] object-cover rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
          src={MOVIE_POSTER_URL + posterUrl}
          alt="Movie Poster"
        />
      </div>
      <h1 className="text-white text-lg pt-4">{name}</h1>
    </div>
  );
};

export default MovieCard;
