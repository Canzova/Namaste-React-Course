import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addNowTraillerVideo } from "../utils/moviesSlice";
import { useEffect, useState } from "react";

// Asynchronous Function and useEffect: useEffect does not support returning values from asynchronous functions. The getNowPlayingMovies function is async and returning xyz from it won't make useNowPlayingMovies return xyz directly.

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    setMovie(json.results[1]);
    dispatch(addNowPlayingMovies(json.results));
    dispatch(addNowTraillerVideo(json.results[0]));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return movie;
};

export default useNowPlayingMovies;
