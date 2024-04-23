import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import styles from './FavoriteButton.module.css';
import { useSelector } from 'react-redux';
import { getFavorites } from 'store/adverts/adverts-selectors';

const FavoriteButton = ({ id, handleClick }) => {
  const favorites = useSelector(getFavorites);

  const isFavorite = id => {
    return !!favorites.find(item => item._id === id);
  };

  const onFavoriteClick = () => {
    handleClick(id);
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${
        isFavorite(id) ? styles.favoriteButton : ''
      }`}
      onClick={onFavoriteClick}
    >
      <svg
        width="24"
        height="24"
        className={`${styles.icon} ${
          isFavorite(id) ? styles.favoriteIcon : ''
        }`}
      >
        <use href={`${Icons}#heart`}></use>
      </svg>
    </button>
  );
};

export default FavoriteButton;
