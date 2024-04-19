import React from 'react';
import Icons from '../../assets/icons-sprite.svg';

const RatingStars = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, () => true);
  const emptyStars = Array.from({ length: 5 - rating }, () => false);
  const stars = [...filledStars, ...emptyStars];
  console.log(stars);

  return (
    <div className="rating">
      {stars.map((filled, index) => (
        <span key={index}>
          <svg width="16" height="16" color={filled ? 'gold' : 'gray'}>
            <use href={`${Icons}#star`}></use>
          </svg>
        </span>
        // <Star key={index} filled={filled} />
      ))}
    </div>
  );
};

export default RatingStars;
