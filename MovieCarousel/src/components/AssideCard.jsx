import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
/**
 * Asside card for display next movie
 * 
 * @module AssideCard
 * @param {string} poster
 * @param {function} setCurrentMovie
 * @param {boolean} last
 * @returns {JSX.Element}
 */
function AssideCard({ poster,setCurrentMovie,last }) {
  return (
    <div className="assideCard" onClick={()=>setCurrentMovie(prev => last? 0 : prev+1)}>
            <svg className="assideCard__svg" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4301 5.92999L20.5001 12L14.4301 18.07" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 12H20.33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        <AnimatePresence>
            <img className="assideCard__img" src={poster} alt={poster} />
        </AnimatePresence>
    </div>
  );
}

AssideCard.propTypes = {
    poster: PropTypes.string,
    setCurrentMovie: PropTypes.func,
    last: PropTypes.bool,   
};

export default AssideCard;