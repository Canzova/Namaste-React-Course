import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import useMoviesImages from "../hooks/useMoviesImages";
import { MOVIE_POSTER_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const MovieInfo = ({ movie }) => {
  //console.log(movie);
  const { original_title, overview } = movie;

  useMoviesImages(movie?.id);
  const logoURL = useSelector(store=>store.movies.nowPlayingMovieLogo);

  
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };


  return (
    <div className="absolute top-[40%] text-white mx-6 ml-20 z-40 w-[35%]">
      <img src={MOVIE_POSTER_URL + logoURL} className="h-28 w-56 object-contain" alt="logo" />
      <h1 className="text-4xl font-bold mb-[1rem]">{original_title}</h1>
      <p className="text-base ">{truncateText(overview, 150)}</p>
      <div className="flex items-center">
        <button className="px-8 bg-white text-black py-2 rounded-md my-6 mr-6 font-bold text-lg hover:bg-opacity-70 flex justify-center items-center">
          <FaPlay className="mr-2" /> <span>Play</span>
        </button>
        <button className="px-8 bg-white text-black py-2 rounded-md my-6 mr-6 font-bold text-lg hover:bg-opacity-70 flex justify-center items-center">
          <IoIosInformationCircle className="mr-2" /> <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
