import React from 'react';
import IconPin from 'components/IconPin/IconPin';
import styles from './Location.module.css'

const Location = ({ location, size }) => {
  const reverseLocation = location.split(', ').reverse().join(', ');
  return (
    <div className={styles.locationWrapper}>
      <IconPin size={size}/>
      <span>{reverseLocation}</span>
    </div>
  );
};

export default Location;
