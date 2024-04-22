import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icons from '../../assets/icons-sprite.svg';
import styles from './ModalWindow.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ onClose, children }) => {
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
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalWindow;
