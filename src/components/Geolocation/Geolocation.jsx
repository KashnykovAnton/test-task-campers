import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconPin from 'components/IconPin/IconPin';
import ButtonMain from 'components/ButtonMain/ButtonMain';
import { fetchLocation } from 'service/location-api';
import { setLocation } from 'store/adverts/adverts-slice-filter';
import styles from './Geolocation.module.css';
import { getLocation } from 'store/adverts/adverts-selectors';

const Geolocation = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const locationFromState = useSelector(getLocation);
  const [cityFromState, countryFromState] = locationFromState
    .split(',')
    .map(item => item.trim())
    .reverse();

  useEffect(() => {
    setUserLocation(`${city}, ${country}`);
    // dispatch(setLocation(`${country}, ${city}`));
  }, [city, country, dispatch]);

  useEffect(() => {
    if (
      (cityFromState !== '' && cityFromState !== undefined) ||
      (countryFromState !== '' && countryFromState !== undefined)
    ) {
      setCity(cityFromState);
      setCountry(countryFromState);
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
        setCity(results.address.city);
        setCountry(results.address.country);
      } catch (error) {
        console.log(`Something went wrong: ${error.message}`);
      }
    };
  }, [city, cityFromState, country, countryFromState]);

  const handleInputChange = e => {
    setUserLocation(e.target.value);
  };

  const handleSearch = () => {
    if (!userLocation.trim()) {
      return alert('Please enter a valid location');
    }
    let [newCity, newCountry] = userLocation.split(', ');
    newCity = newCity === undefined ? '' : newCity;
    newCountry = newCountry === undefined ? '' : newCountry;
    setCity(newCity);
    setCountry(newCountry);
    setIsEditing(false);
    dispatch(setLocation(`${newCountry}, ${newCity}`));
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
          type="text"
          value={isEditing ? userLocation : `${city}, ${country}`}
          onChange={handleInputChange}
          placeholder="City, Country"
        />
      </div>
      {isEditing ? (
        <ButtonMain
          text="Search"
          className="searchLocationButton"
          onClick={handleSearch}
        />
      ) : (
        <ButtonMain
          text="Edit"
          className="searchLocationButton"
          onClick={handleEdit}
        />
      )}
    </>
  );
};

export default Geolocation;
