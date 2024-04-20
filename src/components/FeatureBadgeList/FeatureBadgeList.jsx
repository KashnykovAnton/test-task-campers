import React from 'react';
import styles from './FeatureBadgeList.module.css';
import FeatureBadge from 'components/FeatureBadge/FeatureBadge';

const FeatureBadgeList = ({ data, features = false }) => {
  return (
    <ul className={`${styles.list} ${features ? styles.featuresList : ''}`}>
      {Object.entries(data).map(([key, value], idx) => (
        <FeatureBadge key={idx} badgeKey={key} badgeValue={value} />
      ))}
    </ul>
  );
};

export default FeatureBadgeList;
