import React, { useRef } from "react";
import openAi from "../utils/openAi";
const SearchBox = () => {
  const searchText = useRef();

  const handleMovieSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const searchResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!searchResults.choices) {
      <div>Not Found</div>;
    }

    console.log(searchResults.choices?.[0]?.message?.content);
  };

  return (
    <div className="flex justify-center">
      <div className="absolute top-[15%] w-1/2 bg-black py-4 px-4 rounded-lg bg-opacity-80">
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            className="w-[80%] py-2 px-3 rounded-lg mr-2 outline-none"
            type="text"
            placeholder="What you would like to watch today"
          />
          <button
            className="text-lg font-medium cursor-pointer z-10 text-white bg-[#FF0000] py-2 px-3 rounded-lg"
            onClick={handleMovieSearch}
          >
            Submmit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
