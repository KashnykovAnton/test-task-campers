import React from 'react';
import styles from './ReviewsComponent.module.css';
import IconStarList from 'components/IconStarList/IconStarList';
import TextComponent from 'components/TextComponent/TextComponent';

const ReviewsComponent = ({ reviews }) => {
  return (
    <div className={styles.reviewsSection}>
      {reviews.map(review => (
        <div key={Math.floor(Math.random() * 100)} className={styles.reviewWrapper}>
          <div className={styles.headerWrapper}>
            <div className={styles.avatar}>{review.reviewer_name[0]}</div>
            <div>
              <h3 className={styles.name}>{review.reviewer_name}</h3>
              <IconStarList rating={review.reviewer_rating} />
            </div>
          </div>
          <TextComponent text={review.comment}/>
        </div>
      ))}
    </div>
  );
};

export default ReviewsComponent;
