import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import Icon from '../../assets/AC.svg';
import styles from './FeatureBadge.module.css';

const FeatureBadge = feature => {
  const [key] = Object.keys(feature);

  const featureText = value => {
    switch (value) {
      case 'adults':
        return (
          <div className={styles.badge}>
            <svg className={styles.icon} width="20" height="14">
              <use href={`${Icons}#adults`}></use>
            </svg>
            <p>{feature[key]} adults</p>
          </div>
        );
      case 'transmission':
        return (
          <div className={styles.badge}>
            <svg className={styles.icon} width="20" height="20">
              <use href={`${Icons}#transmission`}></use>
            </svg>
            <p className={styles.capitalize}>{feature[key]}</p>
          </div>
        );
      case 'engine':
        return (
          <div className={styles.badge}>
            <svg className={styles.icon} width="20" height="20">
              <use href={`${Icons}#engine`}></use>
            </svg>
            <p className={styles.capitalize}>{feature[key]}</p>
          </div>
        );
      case 'kitchen':
        return (
          feature[key] === 1 && (
            <div className={styles.badge}>
              <svg className={styles.icon} width="20" height="20">
                <use href={`${Icons}#kitchen`}></use>
              </svg>
              <p>Kitchen</p>
            </div>
          )
        );
      case 'beds':
        return (
          <div className={styles.badge}>
            <svg className={styles.icon} width="20" height="20">
              <use href={`${Icons}#beds`}></use>
            </svg>
            <p>{feature[key]} beds</p>
          </div>
        );
      case 'AC':
        return (
          feature[key] === 1 && (
            <div className={styles.badge}>
              <img className={styles.image} src={Icon} alt="AC-icon" />
              <p>AC</p>
            </div>
          )
        );
      default:
        return null;
    }
  };

  return featureText(key);
};

export default FeatureBadge;
