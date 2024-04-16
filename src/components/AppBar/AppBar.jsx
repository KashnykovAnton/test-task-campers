import { Suspense } from 'react';
import LoaderSpin from 'components/Loader/LoaderSpin';
import Navigation from 'components/Navigation/Navigation';
import styles from './AppBar.module.css';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <Suspense fallback={<LoaderSpin />}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Outlet />
    </Suspense>
  );
};

export default AppBar;
