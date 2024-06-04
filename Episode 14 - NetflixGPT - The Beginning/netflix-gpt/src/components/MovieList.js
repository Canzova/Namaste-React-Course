import React from "react";
import MovieCard from "./MovieCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const MovieList = ({ title, movies }) => {
  return (
    <div className="my-6 px-12 overflow-hidden">
      <h1>{title}</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        className="mySwiper"
      >
        <div className="px-7">
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard posterUrl={movie?.poster_path} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default MovieList;
