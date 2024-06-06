import React from "react";
import useMoreInfoLogo from "../hooks/useMoreInfoLogo";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MoreInfoText = ({ details }) => {
  const logoURL = useMoreInfoLogo(details?.id);
  //console.log(logoURL);
  //const logoURL = useSelector((store) => store.movies.moreInfoPageLogo);
  const {
    budget,
    revenue,
    tagline,
    vote_average,
    runtime,
    genres,
    origin_country,
    original_language,
    title,
    original_title,
    overview,
    release_date,
  } = details;

  return (
    <div className="absolute top-0">
      {logoURL && (
        <img
          src={MOVIE_POSTER_URL + logoURL}
          className="h-28 w-56 object-contain"
          alt="logo"
        />
      )}
      <h1>{title === null ? original_title : title}</h1>
      <p>{overview}</p>
      <p>{tagline}</p>
    </div>
  );
};

export default MoreInfoText;
