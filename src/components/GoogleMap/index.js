import React, { useEffect } from 'react';
import Geocode from 'react-geocode';

import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';


import './googlemaps.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ address, center, zoom, service, retrieveLocation }) => {

  let latitude = null;
  let longitude = null;
  console.log(address);
  Geocode.setApiKey('AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw');
  Geocode.setLanguage('fr');
  Geocode.setRegion('fr');
  Geocode.enableDebug();
  Geocode.fromAddress(address).then(
    (response) => {
      console.log(response);
      /* const { lat, lng } = response.results[0].geometry.location; */
  /*     var { latitude, longitude } = response.results[0].geometry.location; */
 /*      store.dispatch(saveLocation(lat, lng)); */
      latitude = response.results[0].geometry.location.lat;
      longitude = response.results[0].geometry.location.lng;
    },
    (error) => {
      console.error(error);
    },
  );
  console.log(latitude);
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
