import React from "react";
import MainMovie from "./MainMovie";
import MovieInfo from "./MovieInfo";


const MainContainer = ({movie}) => {

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
