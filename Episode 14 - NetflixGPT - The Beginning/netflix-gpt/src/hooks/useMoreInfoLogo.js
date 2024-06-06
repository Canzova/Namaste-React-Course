import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const useMoviesImages = (id) => {
  const [moreInfoPageLogo, setmoreInfoPageLogo] = useState(null);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json?.logos);
    setmoreInfoPageLogo(json?.logos[0]?.file_path);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return moreInfoPageLogo;
};

export default useMoviesImages;
