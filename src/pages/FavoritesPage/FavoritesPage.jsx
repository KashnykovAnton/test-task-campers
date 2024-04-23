import React from 'react';
import Container from 'components/Container/Container';
import ListComponent from 'components/ListComponent/ListComponent';
import { useSelector } from 'react-redux';
import { getFavorites } from 'store/adverts/adverts-selectors';
import TextComponent from 'components/TextComponent/TextComponent';

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);

  return (
    <Container>
      {favorites.length === 0 ? (
        <TextComponent
          text="You don't have any favorite camper yet"
          customStyle="messageText"
        />
      ) : <ListComponent data={favorites} />}
    </Container>
  );
};

export default FavoritesPage;
