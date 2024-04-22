import React from 'react';
import Container from 'components/Container/Container';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import Filter from 'components/Filter/Filter';

const CatalogPage = () => {
  return (
    <Container>
      <Filter />
      <AdvertsList />
    </Container>
  );
};

export default CatalogPage;
