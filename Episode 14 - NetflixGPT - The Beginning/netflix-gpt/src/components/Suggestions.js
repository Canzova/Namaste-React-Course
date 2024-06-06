import React from "react";
import useSuggestionsVideos from "../hooks/useSuggestionsVideos";
import "../App.css";
const Suggestions = ({ id }) => {
  const videos = useSuggestionsVideos(id);
  if (videos.length === 0) return <div>waiting....</div>;
  // console.log(videos);
  return (
    <div className="flex flex-col justify-center items-center mt-8 pb-8">
      <h1 className="text-3xl text-white mb-4 font-semibold">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => {
          return (
            <div
              key={video}
              className="w-[25rem] h-[14rem] overflow-hidden relative rounded-lg"
            >
              <iframe
                className="h-full w-full aspect-video scale-[1.67]"
                src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1&loop=1&playlist=${video}&controls=0&fs=0&showinfo=0&disablekb=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
              ></iframe>
            </div>
          );
        })}
      </div>
      {/* <h1 className="text-3xl text-white mt-12 font-semibold">Watch More Movies</h1> */}
    </div>
  );
};

export default Suggestions;
