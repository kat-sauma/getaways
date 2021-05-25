import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Place = ({
  id,
  name,
  description,
  location,
  imageThumbnail
}) => {
  return (
    <ul>
      <Link key={id} to={`/${id}`} aria-label="place">
        <h2>{name}</h2>
      </Link>
          <li>{description}</li>
          <li>{location}</li>
          <li>{imageThumbnail}
          </li>
    </ul>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired
};

export default Place;
