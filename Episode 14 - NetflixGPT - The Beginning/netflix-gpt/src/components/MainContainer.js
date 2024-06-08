import React from "react";
import MainMovie from "./MainMovie";
import MovieInfo from "./MovieInfo";

const MainContainer = ({ movie }) => {
  // USing Redux
  // const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <>
      <div className="">
        <MainMovie movie={movie} />
        <MovieInfo movie={movie} />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-20 h-[100%]"></div>
    </>
  );
};

export default MainContainer;
