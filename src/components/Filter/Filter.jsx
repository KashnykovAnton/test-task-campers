import React from 'react';
import Geolocation from 'components/Geolocation/Geolocation';
import styles from './Filter.module.css';
import FilterBadgeList from 'components/FilterBadgeList/FilterBadgeList';
import ButtonMain from 'components/ButtonMain/ButtonMain';

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
    van: 'Van',
    fully: 'Fully Integrated',
    alcove: 'Alcove',
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.wrapper}>
        <p className={styles.filterText}>Location</p>
        <div className={styles.location}>
          <Geolocation/>
        </div>
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
      <ButtonMain text='Search' className='searchButton'/>
    </div>
  );
};

export default Filter;
