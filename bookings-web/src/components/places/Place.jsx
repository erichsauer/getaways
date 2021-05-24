import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/place.module.css';

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  let price;
  if (pricePerNight <= 150) price = '💰';
  else if (pricePerNight > 150 && pricePerNight < 300) price = '💰💰';
  else if (pricePerNight >= 300) price = '💰💰💰';
  return (
    <ul>
      <li>{name}</li>
      {/* <li>{description}</li> */}
      {/* <li>{location}</li> */}
      <img src={imageThumbnail} alt={name} />
      {/* <li>{imageThumbnail}</li>
      <li>Maximum Number of Guests: {maxGuests}</li> */}
      <li>
        <span>{price}</span>
        <span>{petFriendly && '🐶'}</span>
        {pool && <span>👙</span>}
        {wifi && <span>🛰</span>}
      </li>
    </ul>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
