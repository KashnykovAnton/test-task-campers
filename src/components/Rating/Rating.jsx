import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import styles from './Rating.module.css';

const Rating = ({ reviews, location }) => {
  const averageRating = () => {
    const rating = reviews.reduce(
      (acc, review) => acc + review.reviewer_rating,
      0
    );
    return rating / reviews.length;
  };

  const reverseLocation = location.split(', ').reverse().join(', ');

  return (
    <div className={styles.info}>
      <div className={styles.centerWrapper}>
        <span className={styles.iconWrapper}>
          <svg width="16" height="16">
            <use href={`${Icons}#star`}></use>
          </svg>
        </span>
        <span className={styles.ratingText}>
          {averageRating()}({reviews.length} Reviews)
        </span>
      </div>
      <div className={styles.centerWrapper}>
        <span className={styles.iconWrapper}>
          <svg width="18" height="20">
            <use href={`${Icons}#map-pin`}></use>
          </svg>
        </span>
        <span>{reverseLocation}</span>
      </div>
    </div>
  );
};

export default Rating;
