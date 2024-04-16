import styles from './InfoMessage.module.css';

const InfoMessage = () => {
  return (
    <p className={styles.text}>
      Sorry, we don't have any campers for you at the moment
    </p>
  );
};
export default InfoMessage;
