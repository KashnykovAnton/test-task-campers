import React from 'react';
import ListItemComponent from 'components/ListItemComponent/ListItemComponent';
import styles from './ListComponent.module.css';

const ListComponent = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item, idx) => {
        return <ListItemComponent key={idx} data={item} />;
      })}
    </ul>
  );
};

export default ListComponent;
