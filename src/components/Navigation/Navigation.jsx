import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        HomePage
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        CatalogPage
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        FavoritesPage
      </NavLink>
    </nav>
  );
};

export default Navigation;
