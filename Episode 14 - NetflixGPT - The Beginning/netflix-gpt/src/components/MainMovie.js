import React from "react";
import useFirstMovieTrailler from "../hooks/useFirstMovieTrailler";

const MainMovie = ({ movie }) => {
  const id = movie?.id;
  const key = useFirstMovieTrailler(id);

  if (key === null) return null;

  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className="w-screen h-screen aspect-video scale-[1.4]"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1&loop=1&playlist=${key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
      ></iframe>
    </div>
  );
};

export default MainMovie;
