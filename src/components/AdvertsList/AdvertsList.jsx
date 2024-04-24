import React, { useEffect } from 'react';
import styles from './AdvertsList.module.css';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import LoaderSpin from 'components/Loader/LoaderSpin';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAdverts,
  getFilteredItems,
  getIsLoading,
  getPage,
  getTotalItems,
} from 'store/adverts/adverts-selectors';
import {
  fetchAdvertsFromApi,
  fetchTotalAdvertsFromApi,
} from 'store/adverts/adverts-thunk';
import { setPage } from 'store/adverts/adverts-slice-adverts';
import ListComponent from 'components/ListComponent/ListComponent';
import TextComponent from 'components/TextComponent/TextComponent';

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const page = useSelector(getPage);
  const isLoading = useSelector(getIsLoading);

  const filteredAdverts = useSelector(getFilteredItems)
  console.log("filteredAdverts: ", filteredAdverts);

  const totalAdverts = useSelector(getTotalItems);

  useEffect(() => {
    if (totalAdverts === 0) {
      dispatch(fetchTotalAdvertsFromApi());
    }
    if (adverts.length < page * 4 && adverts.length < totalAdverts) {
      dispatch(fetchAdvertsFromApi(page));
    }
  }, [dispatch, page, adverts.length, totalAdverts]);

  const handleCLick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={styles.adertsListWrapper}>
      {!isLoading && filteredAdverts.length === 0 ? (
        <TextComponent
          text="Sorry, we don't have campers for you"
          customStyle="messageText"
        />
      ) : (
        <ListComponent data={filteredAdverts} />
      )}
      {isLoading && <LoaderSpin />}
      {filteredAdverts.length < totalAdverts && filteredAdverts.length !== 0 && (
        <ButtonMain
          text="Load more"
          className="loadMoreButton"
          onClick={handleCLick}
        />
      )}
    </div>
  );
};

export default AdvertsList;
