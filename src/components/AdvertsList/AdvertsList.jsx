import React, { useEffect, useState } from 'react';
import AdvertsListItem from 'components/AdvertsItem/AdvertsItem';
import styles from './AdvertsList.module.css';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts } from 'store/adverts/adverts-selectors';
import { fetchAdvertsFromApi } from 'store/adverts/adverts-thunk';

const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  const totalAdverts = 13;

  useEffect(() => {
    dispatch(fetchAdvertsFromApi(page));
  }, [dispatch, page]);


  const handleCLick = () => {
    setPage(page + 1);
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
