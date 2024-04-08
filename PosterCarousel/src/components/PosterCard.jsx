import PropTypes from "prop-types";

/**
 * Card components for basic carousel
 *
 * @module PosterCard
 * @param {number} id
 * @param {object} movie
 * @param {boolean} select
 * @param {function} setCurrentMovie
 * @returns {JSX.Element}
 */
function PosterCard({movie, select, setCurrentMovie, id}) {
  return (
    <div className={select? "posterCard posterCard--select" : "posterCard"} onClick={
      ()=>{
        select?console.log("test"):setCurrentMovie(id)
      }
    }>
          <img src={movie.poster} className={select? "posterCard__image" : "posterCard__image"} alt={movie.title} />
    </div>
  )
}

PosterCard.propTypes = {
  movie: PropTypes.object.isRequired,
  setCurrentMovie: PropTypes.func,
  id: PropTypes.number.isRequired,
  select: PropTypes.bool.isRequired
};

export default PosterCard;
