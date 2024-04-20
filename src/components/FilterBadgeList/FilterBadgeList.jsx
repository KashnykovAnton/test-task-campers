import React from 'react';
import FilterBadge from 'components/FilterBadge/FilterBadge';
import styles from './FilterBadgeList.module.css';

const FilterBadgeList = ({data, camper}) => {
    return (
        <ul className={styles.list}>
          {Object.entries(data).map(([key, value], idx) => (
            <FilterBadge key={idx} badgeKey={key} badgeValue={value} camper={camper}/>
          ))}
        </ul>
      );
};

export default FilterBadgeList;
