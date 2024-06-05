import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const getMovieTrailler = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    //console.log(json);
    setMovieDetails(json);
  };
  useEffect(() => {
    getMovieTrailler();
  }, []);

  return movieDetails;
};

export default useMovieDetails;
