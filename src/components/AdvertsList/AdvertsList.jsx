import React from 'react';
import AdvertsListItem from 'components/AdvertsListItem/AdvertsListItem';
import styles from './AdvertsList.module.css';

const AdvertsList = ({ adverts }) => {
  console.log(adverts);
  return (
    <ul className={styles.list}>
      {adverts.map(item => {
        return <AdvertsListItem key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default AdvertsList;
