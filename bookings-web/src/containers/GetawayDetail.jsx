import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'
import PlaceDetail from '../components/places/PlaceDetail';
import { getPlaceById } from '../services/placesApi';


const GetawayDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});
    console.log(place, 'place');
//   const { id } = useParams();
const id = props.match.params.id;

  useEffect(() => {
    getPlaceById(id)
    
    .then(setPlace)
    .finally(() => setLoading(false));
  }, [id]);

  if(loading) return (
    <section role="img" aria-label="loading">
      <img role="spinner"
        aria-label="loading spinner" 
        src="public/loadingedit3.gif"
      />
    </section>
  );

  return <PlaceDetail { ...place } />;
};

export default GetawayDetail;