import React, { useState } from 'react';
import AdvertModal from 'components/AdvertModal/AdvertModal';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import ListItemHeader from 'components/ListItemHeader/ListItemHeader';
import TextComponent from 'components/TextComponent/TextComponent';
import FeatureBadgeList from 'components/FeatureBadgeList/FeatureBadgeList';
import styles from './ListItemComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from 'store/adverts/adverts-selectors';
import { addToFavorites, removeFromFavorites } from 'store/adverts/adverts-slice-favorites';

const ListItemComponent = ({ data }) => {
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

  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  const handleClick =(id) => {
    if (isFavorite(id)) {
      dispatch(removeFromFavorites(data));
    } else {
      dispatch(addToFavorites(data));
    }
  }

  const isFavorite = id => {
    return !!favorites.find(item => item._id === id);
  };

  return (
    <div className={styles.listWrapper}>
      <li className={styles.listItem}>
          <GalleryItem link={data.gallery[0]} name={data.name} />
        <div className={styles.infoWrapper}>
          <ListItemHeader
            name={data.name}
            price={data.price}
            reviews={data.reviews}
            location={data.location}
            id={data._id}
            handleClick={handleClick}
          />
          <TextComponent
            text={data.description}
            customStyle="shortDescription"
          />
          <FeatureBadgeList data={detailsBadgeObject} />

            <ButtonMain text="Show more" onClick={() => {
              toggleModal();
            }} />

        </div>
      </li>
      {showModal && <AdvertModal onClose={toggleModal} data={data} />}
    </div>
  );
};

export default ListItemComponent;
