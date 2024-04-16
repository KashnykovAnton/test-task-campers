import Container from 'components/Container/Container';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Container>
      <div className={styles.Container}>
        <h1>Such page doesn't exist!</h1>
        <p>¯\_(ツ)_/¯</p>
      </div>
    </Container>
  );
};

export default NotFoundPage;
