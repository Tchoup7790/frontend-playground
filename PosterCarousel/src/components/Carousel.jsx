import { useEffect, useState, useRef } from "react";

import movies from "../utils/movieData.json";
import PosterCard from "./PosterCard";
import SliderCarousel from "./SliderCarousel";
import CarouselArrow from "./CarouselArrow";

/**
 * Carousel component
 *
 * @module Carousel
 * @returns {JSX.Element}
 */
function Carousel() {
  const [currentMovie, setCurrentMovie] = useState(0);
  const length = movies.length - 1;
  const carousel = useRef(null);


  if (carousel.current){
    carousel.current.style.transform =
          currentMovie === movies.length
            ? `translateX(0)`
            : `translateX(-${(currentMovie) * 19}rem)`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev === length ? 0 : prev + 1));
    }, 2000);

    return () => clearTimeout(interval);
  }, [currentMovie, setCurrentMovie, length]);

  return (
    <>
      <div className="carousel">
        <h2 className="carousel__title">Carousel Title</h2>
        <div className="carousel__main">
          <div className="carousel__main__container" ref={carousel}>
            {movies.map((movie, index) => (
              <PosterCard
                key={index}
                id={index}
                movie={movie}
                select={index === currentMovie}
                setCurrentMovie={setCurrentMovie}
              />
            ))}
          </div>
        </div>
        <div className="carousel__bottom">
          <CarouselArrow next={false} setCurrentMovie={setCurrentMovie} length={length}/>
          <SliderCarousel currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} length={movies.length}/>
          <CarouselArrow next={true} setCurrentMovie={setCurrentMovie} length={length}/>
        </div>
      </div>
    </>
  );
}

export default Carousel;
