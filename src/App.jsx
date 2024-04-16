import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar/AppBar';
import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */)
);
const CatalogPage = lazy(() =>
  import(
    './pages/CatalogPage/CatalogPage.jsx' /* webpackChunkName: "movies-page" */
  )
);
const FavoritesPage = lazy(() =>
  import(
    './pages/FavoritesPage/FavoritesPage.jsx' /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;