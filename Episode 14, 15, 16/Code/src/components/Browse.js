import Header from "./Header";
import React, { useState } from "react";
import MainContainer from "./MainContainer";
import SecondaeyContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  const movie = useSelector((store) => store.movies.traillerVideo);

  const showGptSearch = useSelector((store) => store.gpt.show);


  //console.log(movie);
  if (movie === null) {
    return <div>waiting.....</div>;
  }
  return (
    <div className="overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer movie={movie} />
          <SecondaeyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
