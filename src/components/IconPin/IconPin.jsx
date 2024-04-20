import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import styles from './IconPin.module.css';

const IconPin = ({ size }) => {
  return (
    <span className={styles.iconWrapper}>
      <svg
        width={size === 'small' ? 16 : 18}
        height={size === 'small' ? 16 : 20}
      >
        <use
          href={`${Icons}#${size === 'small' ? 'map-pin-small' : 'map-pin'}`}
        ></use>
      </svg>
    </span>
  );
};

export default IconPin;
