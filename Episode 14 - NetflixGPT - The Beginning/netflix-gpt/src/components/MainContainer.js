import React, { useState } from "react";
import MainMovie from "./MainMovie";
import MovieInfo from "./MovieInfo";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  const movie = useNowPlayingMovies();
  //console.log(movie);
  if (movie === null) {
    return;
  }
  // USing Redux
  // const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div>
      <MainMovie movie = {movie} />
      <MovieInfo movie = {movie} />
    </div>
  );
};

export default MainContainer;
