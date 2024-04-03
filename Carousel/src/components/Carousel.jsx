import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import movies from "../utils/movieData.json";

import MainCard from "./MainCard";
import SliderCarousel from "./SliderCarousel";
import AssideCard from "./AssideCard";

/**
 * Carousel component
 *
 * @module Carousel
 * @param {number} currentMovie
 * @returns {JSX.Element}
 */
function Carousel() {
  const [currentMovie, setCurrentMovie] = useState(0);
  const length = movies.length-1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev === length ? 0 : prev + 1));
    }, 10000);

    return () => clearTimeout(interval);
  }, [currentMovie, setCurrentMovie, length]);

  return (
    <>
    <motion.div className="carousel">
      {movies.map((movie, index) => (
            <MainCard
            key={index}
            movie={movie}
            state={
              index === currentMovie
                ? "center"
                : "hidden"
            }
          />
      ))}
    </motion.div>
    <AssideCard poster={movies[(currentMovie===length)? 0:currentMovie+1].poster} setCurrentMovie={setCurrentMovie} last={currentMovie===length}/>
    <SliderCarousel currentMovie={currentMovie} length={length+1} setCurrentMovie={setCurrentMovie}/>
    </>
  );
}

export default Carousel;
