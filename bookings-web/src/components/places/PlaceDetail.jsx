import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceDetail = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  maxGuests,
}) => {
  return (
    <figure>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <img src={image} alt={name} />
      <figcaption>{description}</figcaption>
      <h3>
        <span>${pricePerNight} per night</span>
        <span>Max guests: {maxGuests}</span>
      </h3>
      <Link to="/">back to list</Link>
    </figure>
  );
};

PlaceDetail.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  pricePerNight: PropTypes.number,
  image: PropTypes.string,
  maxGuests: PropTypes.number,
};

export default PlaceDetail;
