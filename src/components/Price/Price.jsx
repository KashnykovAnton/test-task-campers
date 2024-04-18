import styles from './Price.module.css';

const Price = ({ price }) => {
  return <p className={styles.price}>€{price.toFixed(2)}</p>;
};

export default Price;
