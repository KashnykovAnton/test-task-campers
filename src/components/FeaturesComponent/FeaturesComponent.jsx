import React from 'react';
import styles from './FeaturesComponent.module.css';
import FeatureBadgeList from 'components/FeatureBadgeList/FeatureBadgeList';

const FeaturesComponent = ({ data }) => {
  const { form, length, width, height, tank, consumption } = data;
  const detailsObject = { form, length, width, height, tank, consumption };
  const detailsArray = Object.entries(detailsObject);

  const formattedValue = (value, idx) => {
    return idx !== detailsArray.length - 1
      ? value.replace(/(\d)([a-zA-Z])/g, '$1 $2')
      : value;
  };

  const detailsBadgeObject = {
    adults: data.adults,
    transmission: data.transmission,
    AC: data.details.AC,
    engine: data.engine,
    kitchen: data.details.kitchen,
    beds: data.details.beds,
    airConditioner: data.details.airConditioner,
    CD: data.details.CD,
    radio: data.details.radio,
    hob: data.details.hob,
  };

  return (
    <div className={styles.featuresSection}>
      <div>
        <FeatureBadgeList data={detailsBadgeObject} features="true" />
      </div>
      <div>
        <h3 className={styles.detailsHeadline}>Vehicle details</h3>
        <ul className={styles.detailsList}>
          {detailsArray.map(([key, value], idx) => (
            <li key={idx} className={styles.detailsStroke}>
              <p className={styles.detailsName}>{key}</p>
              <p className={idx === 0 ? styles.detailsName : ''}>
                {formattedValue(value, idx)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesComponent;
