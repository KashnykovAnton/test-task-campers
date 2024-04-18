import React, { useState } from 'react';
import FeatureBadge from 'components/FeatureBadge/FeatureBadge';
import styles from './AdvertsListItem.module.css';
import Icons from '../../assets/icons-sprite.svg';
import Modal from 'components/Modal/Modal';
import Headline from 'components/Headline/Headline';
import Price from 'components/Price/Price';
import Rating from 'components/Rating/Rating';
import ButtonMain from 'components/ButtonMain/ButtonMain';

const AdvertsListItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const { adults, transmission, engine } = data;
  const { kitchen, beds, AC } = data.details;

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    showModal
      ? document.body.classList.remove(styles.modalOpen)
      : document.body.classList.add(styles.modalOpen);
  };

  return (
    <div>
      <li className={styles.listItem}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={data.gallery[0]} alt={data.name} />
        </div>
        <div className={styles.infoWrapper}>
          <div>
            <div className={styles.headline}>
              <Headline headline={data.name} />
              <div className={styles.priceWrapper}>
                <Price price={data.price} />
                <button type="button">
                  <svg className={styles.icon} width="24" height="24">
                    <use href={`${Icons}#heart`}></use>
                  </svg>
                </button>
              </div>
            </div>
            <Rating reviews={data.reviews} location={data.location} />
          </div>
          <div className={styles.description}>{data.description}</div>
          <div className={styles.features}>
            <FeatureBadge adults={adults} />
            <FeatureBadge transmission={transmission} />
            <FeatureBadge engine={engine} />
            <FeatureBadge kitchen={kitchen} />
            <FeatureBadge beds={beds} />
            <FeatureBadge AC={AC} />
          </div>
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
