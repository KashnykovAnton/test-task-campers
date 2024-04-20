import React from 'react';
import Icons from '../../assets/icons-sprite.svg';
import Icon from '../../assets/AC.svg';
import styles from './FeatureBadge.module.css';

const FeatureBadge = ({ badgeKey, badgeValue }) => {
  const renderStringCondition = typeof badgeValue === 'string';
  const renderAcCondition = badgeKey === 'AC' && badgeValue > 0;
  const renderNumberCondition =
    typeof badgeValue === 'number' && badgeValue > 0 && badgeKey !== 'AC';
  const checkAirConditioner = value =>
    value === 'airConditioner' ? 'air conditioner' : value;

  return (
    <>
      {renderStringCondition && (
        <div className={styles.badge}>
          <svg className={styles.icon} width="20" height="20">
            <use href={`${Icons}#${badgeKey}`}></use>
          </svg>
          <p className={styles.stringValue}>{badgeValue}</p>
        </div>
      )}
      {renderAcCondition && (
        <div className={styles.badge}>
          <img className={styles.image} src={Icon} alt="AC-icon" />
          <p>
            {badgeValue} {badgeKey}
          </p>
        </div>
      )}
      {renderNumberCondition && (
        <div className={styles.badge}>
          <svg className={styles.icon} width="20" height="20">
            <use href={`${Icons}#${badgeKey}`}></use>
          </svg>
          <p>
            {badgeValue} {checkAirConditioner(badgeKey)}
          </p>
        </div>
      )}
    </>
  );
};

export default FeatureBadge;