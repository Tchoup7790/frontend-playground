import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * MainCard component
 *
 * @module MovieCard
 * @param {object} movie
 * @param {string} state
 * @returns {JSX.Element}
 */
function MovieCard({ movie, state }) {
  const variants = {
    center: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const variantsText = {
    center: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={state}
      className={
        state === "center" || state === "hidden"
          ? "movieCard"
          : "movieCard movieCard--asside"
      }
    >
      <motion.h1
        className="movieCard__title"
        variants={variantsText}
        initial="hidden"
        animate={state}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {movie.title}
      </motion.h1>
      <iframe
        className="movieCard__video"
        src={
          state === "center"
            ? "https://www.youtube-nocookie.com/embed/" +
              movie.trailer +
              "&amp;start=10;controls=0&mute=1&autoplay=1&loop=1"
            : "https://www.youtube-nocookie.com/embed/" +
              movie.trailer +
              "&amp;controls=0&mute=1"
        }
        allow="autoplay;encrypted-media;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </motion.div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
};

export default MovieCard;
