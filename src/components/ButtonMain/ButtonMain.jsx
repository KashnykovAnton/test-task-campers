import React from 'react';
import styles from './ButtonMain.module.css';

const ButtonMain = ({ text, actionType = 'button', className }) => {
  return (

      <button
      type={actionType}
      className={`${styles.buttonMain} ${styles[className]}`}
    >
      {text}
    </button>

  );
};

export default ButtonMain;
