import React from 'react';
import styles from './Headline.module.css';

const Headline = ({ headline }) => {
  return <h3 className={styles.name}>{headline}</h3>;
};

export default Headline;
