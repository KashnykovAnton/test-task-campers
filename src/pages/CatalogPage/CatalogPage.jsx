import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import { fetchAdverts } from 'service/adverts-api';
import { errorMessage } from 'service/toast';
import LoaderSpin from 'components/Loader/LoaderSpin';
import InfoMessage from 'components/InfoMessage/InfoMessage';
import AdvertsList from 'AdvertsList/AdvertsList';

const CatalogPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAdverts = async () => {
      try {
        setIsLoading(true);
        const results = await fetchAdverts();
        if (!results) {
          return;
        }
        setAdverts(results);
      } catch (error) {
        errorMessage(`Something went wrong: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getAdverts();
  }, []);
  return (
    <Container>
      {adverts.length !== 0 ? (
        <AdvertsList adverts={adverts} />
      ) : (
        <InfoMessage />
      )}
      {isLoading && <LoaderSpin />}
    </Container>
  );
};

export default CatalogPage;
