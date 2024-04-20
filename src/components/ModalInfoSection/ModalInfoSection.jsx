import React, { useState } from 'react';
import styles from './ModalInfoSection.module.css';
import FeaturesComponent from 'components/FeaturesComponent/FeaturesComponent';
import ReviewsComponent from 'components/ReviewsComponent/ReviewsComponent';
import FormComponent from 'components/FormComponent/FormComponent';

const ModalInfoSection = ({data}) => {
  const [activeButton, setActiveButton] = useState('features');

  const handleButtonClick = buttonId => {
    setActiveButton(buttonId);
  };
  return (
    <div>
      <div className={styles.buttonsWrapper}>
        <button
          className={`${styles.button} ${
            activeButton === 'features' ? styles.active : ''
          }`}
          onClick={() => handleButtonClick('features')}
        >
          Features
        </button>
        <button
          className={`${styles.button} ${
            activeButton === 'reviews' ? styles.active : ''
          }`}
          onClick={() => handleButtonClick('reviews')}
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        {activeButton === 'features' ? (
          <FeaturesComponent data={data}/>
        ) : (
          <ReviewsComponent reviews={data.reviews}/>
        )}
      <FormComponent />
      </div>
    </div>
  );
};

export default ModalInfoSection;
