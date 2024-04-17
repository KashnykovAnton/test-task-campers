import React from 'react';
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore';
import FeatureBadge from 'components/FeatureBadge/FeatureBadge';
import styles from './AdvertsListItem.module.css';
import Icons from '../../assets/icons-sprite.svg';

const AdvertsListItem = ({ data }) => {
  const { adults, transmission, engine } = data;
  const { kitchen, beds, AC } = data.details;

  const averageRating = () => {
    const rating = data.reviews.reduce(
      (acc, review) => acc + review.reviewer_rating,
      0
    );
    return rating / data.reviews.length;
  };

  const reverseLocation = data.location.split(', ').reverse().join(', ');

  return (
    <li className={styles.listItem}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={data.gallery[0]} alt={data.name} />
      </div>
      <div className={styles.infoWrapper}>
        <div>
          <div className={styles.headline}>
            <h3 className={styles.name}>{data.name}</h3>
            <div className={styles.priceWrapper}>
              <p>€{data.price.toFixed(2)}</p>
              <button type="button">
                <svg className={styles.icon} width="24" height="24">
                  <use href={`${Icons}#heart`}></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.centerWrapper}>
              <span className={styles.iconWrapper}>
                <svg width="16" height="16">
                  <use href={`${Icons}#star`}></use>
                </svg>
              </span>
              <span className={styles.ratingText}>
                {averageRating()}({data.reviews.length} Reviews)
              </span>
            </div>
            <div className={styles.centerWrapper}>
              <span className={styles.iconWrapper}>
                <svg width="24" height="24">
                  <use href={`${Icons}#map-pin`}></use>
                </svg>
              </span>
              <span>{reverseLocation}</span>
            </div>
          </div>
        </div>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.features}>
          <FeatureBadge adults={adults} />
          <FeatureBadge transmission={transmission} />
          <FeatureBadge engine={engine} />
          <FeatureBadge kitchen={kitchen} />
          <FeatureBadge beds={beds} />
          <FeatureBadge AC={AC} />
        </div>
        <div>
          <ButtonShowMore />
        </div>
      </div>
    </li>
  );
};

export default AdvertsListItem;
