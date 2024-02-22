import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import { useState } from "react";

const MovieCard = ({ posterPath, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const hoverstyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)", // Enlarge on hover
    transition: "transform 0.3s ease-in-out", // Smooth transition effect
  };
  if (!posterPath) return null;
  return (
    <Link to={"/watch?v=" + id}>
      <div
        className="w-36 md:w-48 pr-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          alt="Movie Card"
          style={hoverstyle}
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    </Link>
  );
};
export default MovieCard;
