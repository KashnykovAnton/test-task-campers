import React from 'react';
import styles from './ButtonMain.module.css';

const ButtonMain = ({ text, actionType = 'button', className, onClick }) => {
  return (

      <button
      type={actionType}
      className={`${styles.buttonMain} ${styles[className]}`}
      onClick={onClick}
    >
      {text}
    </button>

  );
};

export default ButtonMain;
