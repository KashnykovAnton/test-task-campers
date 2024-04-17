import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import styles from './FeatureBadge.module.css';

const FeatureBadge = ({ data, set }) => {
  const allKeys = Object.keys(data);
  const advertKeys = [
    'adults',
    'transmission',
    'engine',
    'kitchen',
    'beds',
    'airConditioner',
  ];
  const arrayForRender = set === 'short' ? advertKeys : allKeys;

  return arrayForRender.map(key => {
    return (
      <div className={styles.badge}>
        <svg className={styles.icon} width="20" height="20">
          <use href={`${Icons}#${key}`}></use>
        </svg>
        <p>{typeof data[key] === 'number' ? `${data[key]} ${key}` : key}</p>
      </div>
    );
  });
};

export default FeatureBadge;
