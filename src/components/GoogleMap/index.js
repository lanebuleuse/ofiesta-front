import React, { useEffect } from 'react';
import Geocode from 'react-geocode';

import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './googlemaps.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ center, zoom }) => (
  <div className="googlemaps">
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw' }}
      defaultCenter={{ lat: center.lat, lng: center.lng }}
      defaultZoom={zoom}
    >
      <AnyReactComponent
        lat={center.lat}
        lng={center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default GoogleMap;
