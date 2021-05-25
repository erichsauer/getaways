import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';

const Getaways = () => {
  const [loading, setLoading] = useState([true]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces().then(setPlaces);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  return <PlaceList places={places} />;
};

export default Getaways;
