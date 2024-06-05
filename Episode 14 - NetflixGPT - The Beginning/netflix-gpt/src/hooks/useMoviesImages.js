import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovieLogo, addupcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesImages = (id) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json?.logos[0]?.file_path);
    dispatch(addNowPlayingMovieLogo(json?.logos[0]?.file_path));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useMoviesImages;
