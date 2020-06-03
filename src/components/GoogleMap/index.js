import React, { useEffect } from 'react';
import Geocode from 'react-geocode';

import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';


import './googlemaps.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ address, center, zoom, service, retrieveLocation }) => {

  let latitude = null;
  let longitude = null;

/* 
  console.log(center);
  const latitude = center.lat;
  const longitude = center.lng; */
  return (
    <div className="googlemaps">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw' }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={latitude}
          lng={longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  service: PropTypes.object.isRequired,
  retrieveLocation: PropTypes.func.isRequired,
};

export default GoogleMap;
