import React, { useRef } from "react";
import MovieCard from "./MovieCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "../swiper.css";

const MovieList = ({ title, movies }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const paginationRef = useRef(null);
  //console.log(movies[0]?.original_title);
  return (
    <div className="px-12 overflow-hidden relative">
      <h1 className="text-3xl font-semibold py-4 text-white">{title}</h1>
      <div className="swiper-navigation-container">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={false}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          onInit={(swiper) => {
            // Assign the swiper navigation and pagination elements after initialization
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.update();
            swiper.pagination.update();
          }}
        >
          <div className="px-7">
            {movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard name={movie?.title} movie={movie} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div ref={prevRef} className="custom-prev swiper-button-prev"></div>
        <div ref={nextRef} className="custom-next swiper-button-next"></div>
        <div ref={paginationRef} className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default MovieList;
