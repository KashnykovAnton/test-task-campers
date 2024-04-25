import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconPin from 'components/IconPin/IconPin';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import { fetchLocation } from 'service/location-api';
import { setLocation } from 'store/adverts/adverts-slice-filter';
import styles from './Geolocation.module.css';
import { getLocation } from 'store/adverts/adverts-selectors';

const Geolocation = () => {
  const dispatch = useDispatch();

  const [userLocation, setUserLocation] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const locationFromState = useSelector(getLocation);
  const [cityFromState, countryFromState] = locationFromState
    .split(',')
    .map(item => item.trim())
    .reverse();

  const checkValue = value => value === undefined || value.trim().length === 0;

  useEffect(() => {
    if (!checkValue(cityFromState) || !checkValue(countryFromState)) {
      setUserLocation(`${cityFromState}, ${countryFromState}`);
      return;
    }
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position =>
        getLocation(position.coords.latitude, position.coords.longitude)
      );
    } else {
      alert('Geolocation is not available in your browser.');
    }
    const getLocation = async (lat, lon) => {
      try {
        const results = await fetchLocation(lat, lon);
        if (!results) {
          return;
        }
        setUserLocation(`${results.address.city}, ${results.address.country}`);
      } catch (error) {
        console.log(`Something went wrong: ${error.message}`);
      }
    };
  }, [cityFromState, countryFromState]);

  const handleInputChange = e => {
    setUserLocation(e.target.value);
  };

  const handleSearch = () => {
    const [newCity = '', newCountry = ''] = userLocation
      .split(',')
      .map(item => item.trim());
    if (newCity && newCountry) {
      dispatch(setLocation(`${newCountry}, ${newCity}`));
    } else {
      alert('Please enter a valid location in the format "City, Country"');
    }
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <div className={styles.iconWrapper}>
          <IconPin />
        </div>
        <input
          className={styles.locationInput}
          type="text"
          value={userLocation}
          onChange={handleInputChange}
          placeholder="City, Country"
        />
      </div>
      <ButtonMain
        text={isEditing ? 'Search' : 'Edit'}
        className="searchLocationButton"
        onClick={isEditing ? handleSearch : handleEdit}
      />
    </>
  );
};

export default Geolocation;
