import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icons from '../../assets/icons-sprite.svg';
import styles from './Modal.module.css';
import Headline from 'components/Headline/Headline';
import Rating from 'components/Rating/Rating';
import Price from 'components/Price/Price';
import ModalInfoSection from 'components/ModalInfoSection/ModalInfoSection';
import GalleryList from 'components/GalleryList/GalleryList';
import TextComponent from 'components/TextComponent/TextComponent';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, data }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.headerContentWrapper}>
          <Headline headline={data.name} />
          <div
            className={styles.closeBtn}
            onClick={() => {
              onClose();
            }}
          >
            <svg width="32" height="32">
              <use href={`${Icons}#close`}></use>
            </svg>
          </div>
          <div className={styles.ratingWrapper}>
            <Rating reviews={data.reviews} location={data.location} />
          </div>
          <Price price={data.price} />
        </div>
        <div className={styles.mainContentWrapper}>
          <GalleryList gallery={data.gallery} name={data.name}/>
          <TextComponent text={data.description} customStyle='fullDescription'/>
          <ModalInfoSection data={data}/>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
