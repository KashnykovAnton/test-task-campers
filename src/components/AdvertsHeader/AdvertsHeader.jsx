import React from 'react';
import Headline from 'components/Headline/Headline';
import Price from 'components/Price/Price';
import Rating from 'components/ModalRatingAndLocation/ModalRatingAndLocation';
import styles from './AdvertsHeader.module.css';
import FavoriteButton from 'components/FavoriteButton/FavoriteButton';

const AdvertsHeader = ({ name, price, reviews, location, id, handleClick }) => {
  return (
    <div>
      <div className={styles.header}>
        <Headline headline={name} />
        <div className={styles.priceWrapper}>
          <Price price={price} />
          <FavoriteButton id={id} handleClick={handleClick}/>
        </div>
      </div>
      <Rating reviews={reviews} location={location} />
    </div>
  );
};

export default AdvertsHeader;
