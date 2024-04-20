import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import styles from './IconStar.module.css';

const IconStar = ({ filled = true }) => {
  return (
    <span className={styles.iconWrapper}>
      <svg
        className={filled ? '' : styles.notFilledIcon}
        width="16"
        height="16"
      >
        <use href={`${Icons}#star`}></use>
      </svg>
    </span>
  );
};

export default IconStar;
