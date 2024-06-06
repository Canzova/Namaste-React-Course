import React from "react";
import useMoreInfoLogo from "../hooks/useMoreInfoLogo";
import { MOVIE_POSTER_URL } from "../utils/constants";
import Suggestions from "./Suggestions";

const MoreInfoText = ({ details }) => {
  const logoURL = useMoreInfoLogo(details?.id);
  console.log(details?.genres);
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
    <>
      <div className="bg-gradient-to-tr from-black absolute inset-0 h-screen">
        <div className="absolute top-[30%] left-[5%]">
          {logoURL && (
            <img
              src={MOVIE_POSTER_URL + logoURL}
              className="h-40 object-contain max-w-[50%]"
              alt="logo"
            />
          )}
          <div className="text-white pr-[50%]">
            <h1 className="text-4xl font-bold mb-[1rem]">
              {title === null ? original_title : title}
            </h1>
            <p className="text-base my-3">
              {tagline +
                " | " +
                release_date +
                " |" +
                genres.map((genre) => " " + genre?.name)}
            </p>

            <p className="text-base">{overview}</p>
          </div>
        </div>
      </div>
      <Suggestions />
    </>
  );
};

export default MoreInfoText;
