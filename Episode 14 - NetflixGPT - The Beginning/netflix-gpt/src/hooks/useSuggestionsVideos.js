import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSuggestionsVideos = (id) => {
  const [videos, setVideos] = useState([]);
  const getMovieTrailler = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json);

    setVideos([
      json.results[0]?.key,
      json.results[1]?.key,
      json.results[2]?.key,
      json.results[3]?.key,
      json.results[4]?.key,
      json.results[5]?.key,
    ]);
  };
  useEffect(() => {
    getMovieTrailler();
  }, []);

  return videos;
};

export default useSuggestionsVideos;
