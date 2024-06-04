import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";
const MovieCard = ({ posterUrl }) => {
  return (
    <div className="">
      <div className="w-[18rem] h-[10rem]">
        <img className="h-[100%] w-[100%] object-cover" src={MOVIE_POSTER_URL + posterUrl} alt="Movie Poster" />
      </div>
    </div>
  );
};

export default MovieCard;
