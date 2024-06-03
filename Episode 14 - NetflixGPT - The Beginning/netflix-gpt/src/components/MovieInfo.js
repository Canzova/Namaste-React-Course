import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const MovieInfo = ({ movie }) => {
  //console.log(movie);
  const { original_title, overview } = movie;
  return (
    <div className="absolute top-[45%] text-white mx-6 ml-20 z-40 w-[35%]">
      <h1 className="text-5xl font-bold mb-[2rem]">{original_title}</h1>
      <p className="text-base ">{overview}</p>
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
