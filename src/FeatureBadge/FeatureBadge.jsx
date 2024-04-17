import React from 'react';
// import iconsSprite from './../assets/iconsSprite.svg';
import adults from './../assets/adults.svg';
import transmission from './../assets/transmission.svg';
import engine from './../assets/engine.svg';
import kitchen from './../assets/kitchen.svg';
import beds from './../assets/beds.svg';
import airConditioner from './../assets/airConditioner.svg';

import styles from './FeatureBadge.module.css';

const FeatureBadge = feature => {
  const [key] = Object.keys(feature);
  console.log(feature);
  console.log(feature[key]);

  const featureText = value => {
    switch (value) {
      case 'adults':
        return (
          <div className={styles.badge}>
            <img className={styles.icon} src={adults} alt="adults-icon" />
            <p>{feature[key]} adults</p>
          </div>
        );
      case 'transmission':
        return (
          <div className={styles.badge}>
            <img
              className={styles.icon}
              src={transmission}
              alt="transmission-icon"
            />
            <p className={styles.capitalize}>{feature[key]}</p>
          </div>
        );
      case 'engine':
        return (
          <div className={styles.badge}>
            <img className={styles.icon} src={engine} alt="engine-icon" />
            <p className={styles.capitalize}>{feature[key]}</p>
          </div>
        );
      case 'kitchen':
        return (
          feature[key] === 1 && (
            <div className={styles.badge}>
              <img className={styles.icon} src={kitchen} alt="kitchen-icon" />
              <p>Kitchen</p>
            </div>
          )
        );
      case 'beds':
        return (
          <div className={styles.badge}>
            <img className={styles.icon} src={beds} alt="beds-icon" />
            <p>{feature[key]} beds</p>
          </div>
        );
      case 'airConditioner':
        return (
          feature[key] === 1 && (
            <div className={styles.badge}>
              <img
                className={styles.icon}
                src={airConditioner}
                alt="airConditioner-icon"
              />
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
