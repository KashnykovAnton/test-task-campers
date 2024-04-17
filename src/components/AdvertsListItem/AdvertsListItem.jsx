import React from 'react';
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore';
import styles from './AdvertsListItem.module.css';
import FeatureBadge from 'FeatureBadge/FeatureBadge';

const AdvertsListItem = ({ data }) => {
  const { adults, transmission, engine } = data;
  const { kitchen, beds, airConditioner } = data.details;

  return (
    <li className={styles.listItem}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={data.gallery[0]} alt={data.name} />
      </div>
      <div className={styles.infoWrapper}>
        <div></div>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.features}>
          <FeatureBadge adults={adults} />
          <FeatureBadge transmission={transmission} />
          <FeatureBadge engine={engine} />
          <FeatureBadge kitchen={kitchen} />
          <FeatureBadge beds={beds} />
          <FeatureBadge airConditioner={airConditioner} />
        </div>
        <div>
          <ButtonShowMore />
        </div>
      </div>
    </li>
  );
};

export default AdvertsListItem;
