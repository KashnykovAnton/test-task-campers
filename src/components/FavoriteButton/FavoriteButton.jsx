import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import styles from './FavoriteButton.module.css';

const FavoriteButton = () => {
  return (
    <button type="button" className={styles.button}>
      <svg width="24" height="24">
        <use href={`${Icons}#heart`}></use>
      </svg>
    </button>
  );
};

export default FavoriteButton;
