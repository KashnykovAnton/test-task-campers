import React, { useState } from 'react';
import styles from './HeroComponent.module.css';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import TextComponent from 'components/TextComponent/TextComponent';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import FormComponent from 'components/FormComponent/FormComponent';

const HeroComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    showModal
      ? document.body.classList.remove(styles.modalOpen)
      : document.body.classList.add(styles.modalOpen);
  };

  const heroText =
    'Just leave us your contacts and we will get back to you today';

  return (
    <div className={styles.hero}>
      <h1 className={styles.heroHeading}>Book camper today!</h1>
      <TextComponent text={heroText} customStyle="heroText" />
      <div
        onClick={() => {
          toggleModal();
        }}
      >
        <ButtonMain text="Give contacts" />
      </div>
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <div className={styles.contentWrapper}>
            <FormComponent />
          </div>
        </ModalWindow>
      )}
    </div>
  );
};

export default HeroComponent;
