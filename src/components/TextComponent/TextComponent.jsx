import React from 'react';
import styles from './TextComponent.module.css';

const TextComponent = ({ text, customStyle = '' }) => {
  return (
    <div className={`${styles.mainStyle} ${styles[customStyle]}`}>{text}</div>
  );
};

export default TextComponent;
