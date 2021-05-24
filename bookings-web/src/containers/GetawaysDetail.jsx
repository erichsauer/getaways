import React, { useState, useEffect } from 'react';
import PlaceDetail from '../components/places/PlaceDetail';
import { getPlaces } from '../services/placesApi';

const GetawaysDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});

  useEffect(() => {
    getPlaces(id).then(setPlace);
    setLoading(false);
  }, []);
  if (loading) return <div>Loading...</div>;
  return <PlaceDetail {...place} />;
};

export default GetawaysDetail;
