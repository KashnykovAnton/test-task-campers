import React, { useEffect, useState } from 'react';
import AdvertsListItem from 'components/AdvertsItem/AdvertsItem';
import styles from './AdvertsList.module.css';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import { fetchAdverts } from 'service/adverts-api';
import { errorMessage } from 'service/toast';
import LoaderSpin from 'components/Loader/LoaderSpin';

const AdvertsList = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const totalAdverts = 13;

  useEffect(() => {
    const getAdverts = async () => {
      try {
        setIsLoading(true);
        const results = await fetchAdverts(page);
        if (!results) {
          return;
        }
        setAdverts(prevMovies =>
          prevMovies.length !== 0 ? [...prevMovies, ...results] : results
        );
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getAdverts();
  }, [page]);

  const handleCLick = () => {
    console.log('click');
    setPage(prevPage => prevPage + 1);
    console.log(page);
  };

  return (
    <div className={styles.adertsListWrapper}>
      <ul className={styles.list}>
        {adverts.map((item, idx) => {
          return <AdvertsListItem key={idx} data={item} />;
        })}
      </ul>
      {adverts.length < totalAdverts && (
        <div className={styles.buttonWrapper} onClick={handleCLick}>
          <ButtonMain text="Load more" className="loadMoreButton" />
        </div>
      )}
      {isLoading && <LoaderSpin />}
    </div>
  );
};

export default AdvertsList;
