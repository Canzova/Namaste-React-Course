import Header from "./Header";
import React from "react";
import MainContainer from "./MainContainer";
import SecondaeyContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const movie = useNowPlayingMovies();
  //console.log(movie);
  if (movie === null) {
    return;
  }
  return (
    <div className="overflow-x-hidden after:absolute after:inset-0 after:bg-black after:opacity-40">
      <Header />
      <MainContainer movie={movie} />
      <SecondaeyContainer />
    </div>
  );
};

export default Browse;
