import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { MOVIE_POSTER_URL2 } from "../utils/constants";

const MoreInfo = () => {
  const { movieid } = useParams();
  //console.log(movieid);
  const details = useMovieDetails(movieid);
  if (details === null) return;
  console.log(details);
  return <div>
    <div>
    <img className="h-screen w-screen object-cover" src={MOVIE_POSTER_URL2 + details?.backdrop_path} alt="poster" />
    <div>hello</div>
    </div>
  </div>;
};

export default MoreInfo;
