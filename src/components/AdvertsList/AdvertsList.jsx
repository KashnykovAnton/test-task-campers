import React from 'react';
import AdvertsListItem from 'components/AdvertsItem/AdvertsItem';
import styles from './AdvertsList.module.css';
import ButtonMain from 'components/ButtonMain/ButtonMain';

const AdvertsList = ({ adverts }) => {
  return (
    <div className={styles.adertsListWrapper}>
      <ul className={styles.list}>
        {adverts.map(item => {
          return <AdvertsListItem key={item._id} data={item} />;
        })}
      </ul>
      <ButtonMain text="Load more" className="loadMoreButton" />
    </div>
  );
};

export default AdvertsList;
