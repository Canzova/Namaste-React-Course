import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
 
  //console.log(nowPlaying);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={nowPlaying} />
    </div>
  );
};

export default SecondaryContainer;
