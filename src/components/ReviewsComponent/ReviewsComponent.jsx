import React from 'react';
import styles from './ReviewsComponent.module.css';
import { Icons } from 'react-toastify';
import RatingStars from 'components/RatingStars/RatingStars';

const ReviewsComponent = ({ reviews }) => {
  const renderRating = () => {
    let i = 0
    while (i < 5) {
      // выводит 0, затем 1, затем 2
      <svg width="24" height="24">
        <use href={`${Icons}#star`}></use>
      </svg>;
      i++;
    }
  };

  return (
    <div className={styles.reviewsWrapper}>
      {reviews.map(review => (
        <div key={Math.floor(Math.random() * 100)}>
          <div className={styles.nameWrapper}>
            <div className={styles.avatar}>{review.reviewer_name[0]}</div>
            <div>
              <h3 className={styles.name}>{review.reviewer_name}</h3>
              <RatingStars rating={review.reviewer_rating}/>
              <div>{renderRating()}</div>
              {/* <span>{review.reviewer_rating}</span> */}
            </div>
          </div>

          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsComponent;
