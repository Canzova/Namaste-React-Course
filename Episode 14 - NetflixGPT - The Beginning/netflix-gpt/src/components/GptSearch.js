import React from "react";
import { BG_IMG } from "../utils/constants";
import SearchBox from "./SearchBox";

const GptSearch = () => {
  return (
    <div className="relative">
      <img className="transform  origin-top" src={BG_IMG} alt="BG" />
      <div className="absolute inset-0 bg-black bg-opacity-40 h-[100%]"></div>
      <SearchBox/>
    </div>
  );
};

export default GptSearch;
