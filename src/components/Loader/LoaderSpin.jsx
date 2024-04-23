import { Oval } from 'react-loader-spinner';
import styles from './LoaderSpin.module.css';

function LoaderSpin() {
  return (
    <div className={styles.backdrop}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="var(--red-color)"
        secondaryColor="var(--gray-color)"
        ariaLabel="oval-loading"
        wrapperClass={styles.spinnerWrapper}
      />
    </div>
  );
}

export default LoaderSpin;
