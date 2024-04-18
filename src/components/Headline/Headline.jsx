import React from 'react';
import styles from './Headline.module.css';

const Headline = ({ headline }) => {
  return <h2 className={styles.name}>{headline}</h2>;
};

export default Headline;
