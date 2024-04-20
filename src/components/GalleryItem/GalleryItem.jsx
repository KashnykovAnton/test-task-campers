import React from 'react'
import styles from './GalleryItem.module.css'

const GalleryItem = ({link, name}) => {
  return (
    <img className={styles.image} src={link} alt={name} />
  )
}

export default GalleryItem