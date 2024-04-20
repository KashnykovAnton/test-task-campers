import React from 'react';
import styles from './GalleryList.module.css';
import GalleryItem from 'components/GalleryItem/GalleryItem';

const GalleryList = ({ gallery, name }) => {
  return (
    <ul className={styles.list}>
      {gallery.map(link => (
        <GalleryItem key={Math.floor(Math.random() * 100)} link={link} name={name}/>
      ))}
    </ul>
  );
};

export default GalleryList;
