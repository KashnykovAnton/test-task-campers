import axios from 'axios';

export async function fetchLocation(lat, lon) {
  const { data } = await axios(
    `http://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  );
  return data;
}
