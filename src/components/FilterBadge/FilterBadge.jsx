import React from 'react';
import Icon from '../../assets/AC-big.svg';
import Icons from '../../assets/icons-sprite.svg';
import styles from './FilterBadge.module.css';

const FilterBadge = ({ badgeKey, badgeValue, camper = false }) => {
  const renderAcCondition = badgeKey === 'AC';

  return (
    <>
      {renderAcCondition && (
        <button className={styles.badge}>
          <img className={styles.image} src={Icon} alt="AC-icon" />
          <p>{badgeValue}</p>
        </button>
      )}
      {!renderAcCondition && (
        <button className={styles.badge}>
          <svg
            className={styles.icon}
            width={camper ? 40 : 32}
            height={camper ? 28 : 32}
          >
            <use href={`${Icons}#${badgeKey}-big`}></use>
          </svg>
          <p className={styles.stringValue}>{badgeValue}</p>
        </button>
      )}
    </>
  );
};

export default FilterBadge;
