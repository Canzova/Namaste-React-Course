import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { MOVIE_POSTER_URL2 } from "../utils/constants";
import MoreInfoText from "./MoreInfoText";

const MoreInfo = () => {
  const { movieid } = useParams();
  const details = useMovieDetails(movieid);

  if (details === null) return <div>waiting.....</div>;

  return (
    <div className="relative bg-[#181818]">
      <img
        className="h-screen w-screen"
        src={MOVIE_POSTER_URL2 + details?.backdrop_path}
        alt="poster"
      />
      <MoreInfoText details={details} />
    </div>
  );
};

export default MoreInfo;
