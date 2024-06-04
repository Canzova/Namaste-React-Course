import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="overflow-auto">
    <h1>{title}</h1>
      <div className="flex">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterUrl={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
