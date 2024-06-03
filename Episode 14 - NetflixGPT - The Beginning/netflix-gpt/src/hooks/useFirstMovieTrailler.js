import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFirstMovieTrailler = (id) => {
  const [key, setKey] = useState(null);
  const getMovieTrailler = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const videos = json.results.filter(
      (data) => data.name === "Official Trailer"
    );
    const video = videos.length ? videos[0] : json.results[0];
    //console.log(video.key);
    setKey(video?.key);
  };
  useEffect(() => {
    getMovieTrailler();
  }, []);

  return key;
};

export default useFirstMovieTrailler;
