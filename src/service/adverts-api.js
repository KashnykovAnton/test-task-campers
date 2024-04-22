import axios from 'axios';

// Fetch adverts
// https://661e586198427bbbef0446b7.mockapi.io/api/adverts
export async function fetchAdverts(page = 1) {
  const perPage = 4;
  const { data } = await axios(
    `https://661e586198427bbbef0446b7.mockapi.io/api/adverts?page=${page}&limit=${perPage}`
  );
  return data;
}
