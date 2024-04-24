import React from 'react';
import Icon from '../../assets/AC-big.svg';
import Icons from '../../assets/icons-sprite.svg';
import styles from './FilterBadge.module.css';
import {
  toggleBooleanFilter,
  toggleStringFilter,
} from 'store/adverts/adverts-slice-filter';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'store/adverts/adverts-selectors';

const FilterBadge = ({ badgeKey, badgeValue, camper = false }) => {
  const renderAcCondition = badgeKey === 'AC';

  // console.log('badgeKey: ', badgeKey);
  // console.log('badgeValue: ', badgeValue);

  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  const handleToggle = filterName => {
    if (filterName === 'transmission' || filterName === 'engine') {
      const value = badgeValue.toLowerCase();
      dispatch(toggleStringFilter({ filterName, value }));
      return;
    }
    dispatch(toggleBooleanFilter(filterName));
  };

  const checkFilterValue = filterName => {
    if (Array.isArray(filters[filterName])) {
      return filters[filterName].includes(badgeValue.toLowerCase());
    }
    return filters[filterName];
  };

  return (
    <>
      {renderAcCondition && (
        <button
          className={`${styles.badge} ${
            checkFilterValue(badgeKey) ? styles.active : ''
          }`}
          onClick={() => handleToggle(badgeKey)}
        >
          <img className={styles.image} src={Icon} alt="AC-icon" />
          <p>{badgeValue}</p>
        </button>
      )}
      {!renderAcCondition && (
        <button
          className={`${styles.badge} ${
            checkFilterValue(badgeKey) ? styles.active : ''
          }`}
          onClick={() => handleToggle(badgeKey)}
        >
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
