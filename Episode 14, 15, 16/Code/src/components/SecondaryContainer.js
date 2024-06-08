import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  usePopularMovies();
  const popularMovies = useSelector((store) => store.movies.PopularMovies);
  useTopRated();
  const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);
  useUpcomingMovies();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className="bg-[#181818] relative">
      <MovieList title={"Now Playing"} movies={nowPlaying} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
    </div>
  );
};

export default SecondaryContainer;
