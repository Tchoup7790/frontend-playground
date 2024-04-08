import PropTypes from "prop-types";
/**
 * Dot Slider for carousel
 * 
 * @module SliderCarousel
 * @param {number} currentMovie
 * @param {number} length
 * @param {function} setCurrentMovie
 * @returns {JSX.Element}
 */
function SliderCarousel({ currentMovie, length, setCurrentMovie }) {
  return (
    <div className="dotSlider">
      {[...Array(length)].map((_, index) => (
        <div
          key={index}
          className={
            index === currentMovie
              ? "dotSlider__dot dotSlider__dot--active"
              : "dotSlider__dot"
          }
          onClick={() => setCurrentMovie(index)}
        ></div>
      ))}
    </div>
  )
}

SliderCarousel.propTypes = {
    currentMovie: PropTypes.bool,
    length: PropTypes.number,
    setCurrentMovie: PropTypes.func,
};

export default SliderCarousel;