import axios from 'axios';

const BASE_URL = 'https://661e586198427bbbef0446b7.mockapi.io/api/';

axios.defaults.baseURL = BASE_URL;

// Fetch adverts
// https://661e586198427bbbef0446b7.mockapi.io/api/adverts
export async function fetchAdverts() {
  const { data } = await axios(`adverts`);
  return data;
}
