import React from 'react';
import IconStar from 'components/IconStar/IconStar';
import styles from './IconStarList.module.css';

const IconStarList = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, () => true);
  const emptyStars = Array.from({ length: 5 - rating }, () => false);
  const stars = [...filledStars, ...emptyStars];

  return (
    <ul className={styles.wrapper}>
      {stars.map((filled, idx) => (
        <IconStar key={idx} filled={filled} />
      ))}
    </ul>
  );
};

export default IconStarList;
