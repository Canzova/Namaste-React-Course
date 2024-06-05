import React, { useState } from "react";
import { MOVIE_POSTER_URL, MOVIE_POSTER_URL2 } from "../utils/constants";
import { Link } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieCard = ({ name, movie }) => {
  const details = useMovieDetails(movie?.id);
  if (details === null) return;
  //console.log(details);
  return (
    <Link to={"/moreinfo/" + movie?.id}>
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <div className="w-[18rem] h-[10rem] rounded-lg overflow-hidden">
          <img
            className="h-[100%] w-[100%] object-cover rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
            src={MOVIE_POSTER_URL + details?.backdrop_path}
            alt="Movie Poster"
          />
        </div>
        <h1 className="text-white text-lg pt-4">{name}</h1>
      </div>
    </Link>
  );
};

export default MovieCard;
