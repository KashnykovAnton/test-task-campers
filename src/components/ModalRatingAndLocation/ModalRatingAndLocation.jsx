import React from 'react';
import IconStar from 'components/IconStar/IconStar';
import Location from 'components/Location/Location';
import styles from './ModalRatingAndLocation.module.css';

const ModalRatingAndLocation = ({ reviews, location }) => {
  const averageRating = () => {
    const rating = reviews.reduce(
      (acc, review) => acc + review.reviewer_rating,
      0
    );
    return Math.floor((rating / reviews.length) * 10) / 10;
  };

  return (
    <div className={styles.info}>
      <IconStar />
      <span className={styles.ratingText}>
        {averageRating()}({reviews.length} Reviews)
      </span>
      <Location location={location} size='small'/>
    </div>
  );
};

export default ModalRatingAndLocation;
