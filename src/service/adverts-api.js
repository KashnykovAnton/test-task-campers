import axios from 'axios';

export async function fetchAdverts(page = 1) {
  const perPage = 4;
  const { data } = await axios(
    `https://661e586198427bbbef0446b7.mockapi.io/api/adverts?page=${page}&limit=${perPage}`
  );
  return data;
}

export async function fetchTotalAdverts() {
  const { data } = await axios(
    `https://661e586198427bbbef0446b7.mockapi.io/api/adverts`
  );
  return data.length;
}
