import React, { useEffect, useState } from 'react';
import IconPin from 'components/IconPin/IconPin';
import { fetchLocation } from 'service/location-api';
import styles from './Geolocation.module.css';

const Geolocation = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position =>
        getLocation(position.coords.latitude, position.coords.longitude)
      );
    } else {
      alert('Geolocation is not available in your browser.');
    }
  }, []);

  const getLocation = async (lat, lon) => {
    try {
      const results = await fetchLocation(lat, lon);
      if (!results) {
        return;
      }
      setCity(results.address.city);
      setCountry(results.address.country);
    } catch (error) {
      console.log(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <div className={styles.locationWrapper}>
      <IconPin />
      {city && country ? (
        <span>
          {city}, {country}
        </span>
      ) : (
        <span>Geolocation is blocked</span>
      )}
    </div>
  );
};

export default Geolocation;
