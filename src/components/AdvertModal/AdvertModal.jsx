import Headline from 'components/Headline/Headline';
import ModalRatingAndLocation from 'components/ModalRatingAndLocation/ModalRatingAndLocation';
import Price from 'components/Price/Price';
import ModalInfoSection from 'components/ModalInfoSection/ModalInfoSection';
import GalleryList from 'components/GalleryList/GalleryList';
import TextComponent from 'components/TextComponent/TextComponent';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import styles from './AdvertModal.module.css';

const AdvertModal = ({ onClose, data }) => {
  return (
    <ModalWindow onClose={onClose}>
      <div className={styles.headerContentWrapper}>
        <Headline headline={data.name} />
        <div className={styles.ratingWrapper}>
          <ModalRatingAndLocation
            reviews={data.reviews}
            location={data.location}
          />
        </div>
        <Price price={data.price} />
      </div>
      <div className={styles.mainContentWrapper}>
        <GalleryList gallery={data.gallery} name={data.name} />
        <TextComponent text={data.description} customStyle="fullDescription" />
        <ModalInfoSection data={data} />
      </div>
    </ModalWindow>
  );
};

export default AdvertModal;
