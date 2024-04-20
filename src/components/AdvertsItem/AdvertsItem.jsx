import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import AdvertsHeader from 'components/AdvertsHeader/AdvertsHeader';
import TextComponent from 'components/TextComponent/TextComponent';
import FeatureBadgeList from 'components/FeatureBadgeList/FeatureBadgeList';
import styles from './AdvertsItem.module.css';

const AdvertsListItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    showModal
      ? document.body.classList.remove(styles.modalOpen)
      : document.body.classList.add(styles.modalOpen);
  };

  const detailsBadgeObject = {
    adults: data.adults,
    transmission: data.transmission,
    engine: data.engine,
    kitchen: data.details.kitchen,
    beds: data.details.beds,
    AC: data.details.AC,
  };

  return (
    <div className={styles.listWrapper}>
      <li className={styles.listItem}>
          <GalleryItem link={data.gallery[0]} name={data.name} />
        <div className={styles.infoWrapper}>
          <AdvertsHeader
            name={data.name}
            price={data.price}
            reviews={data.reviews}
            location={data.location}
          />
          <TextComponent
            text={data.description}
            customStyle="shortDescription"
          />
          <FeatureBadgeList data={detailsBadgeObject} />
          <div
            onClick={() => {
              toggleModal();
            }}
          >
            <ButtonMain text="Show more" />
          </div>
        </div>
      </li>
      {showModal && <Modal onClose={toggleModal} data={data} />}
    </div>
  );
};

export default AdvertsListItem;
