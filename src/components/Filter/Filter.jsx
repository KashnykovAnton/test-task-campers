import React from 'react';
import Geolocation from 'components/Geolocation/Geolocation';
import styles from './Filter.module.css';
import FilterBadgeList from 'components/FilterBadgeList/FilterBadgeList';

const Filter = () => {
  const vehicleEquipment = {
    AC: 'AC',
    transmission: 'Automatic',
    engine: 'Petrol',
    kitchen: 'Kitchen',
    TV: 'TV',
    shower: 'Shower/WC',
  };

  const vehicleType = {
    panelTruck: 'Van',
    fullyIntegrated: 'Fully Integrated',
    alcove: 'Alcove',
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.wrapper}>
        <p className={styles.filterText}>Location</p>
          <Geolocation/>
      </div>
      <div className={styles.wrapper}>
        <p className={`${styles.filterText} ${styles.filterTextWithMargin}`}>
          Filters
        </p>
        <h3 className={styles.filterHeadline}>Vehicle equipment</h3>
        <FilterBadgeList data={vehicleEquipment} />
      </div>
      <div className={styles.lastWrapper}>
        <h3 className={styles.filterHeadline}>Vehicle type</h3>
        <FilterBadgeList data={vehicleType} camper={true} />
      </div>
    </div>
  );
};

export default Filter;
