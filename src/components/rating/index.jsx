import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = () => {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);

  const mouseEnter = (index) => {
    setHover(index + 1);
  };
  const mouseLeave = () => {
    setHover(0);
  };
  const mouseClick = (index) => {
    setClick(index + 1);
  };
  return (
    <div className="star-rating-container">
      {[...Array(5)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={index < (click || hover) && "fill-star"}
            onMouseLeave={mouseLeave}
            onMouseEnter={() => mouseEnter(index)}
            onClick={() => mouseClick(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
