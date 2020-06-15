import React, { useEffect } from 'react';
import Geocode from 'react-geocode';

import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './googlemaps.scss';

const GoogleMap = ({ center, zoom }) => (
  <div className="googlemaps">
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw' }}
      defaultCenter={{ lat: center.lat, lng: center.lng }}
      defaultZoom={zoom}
    >
      <div
        lat={center.lat}
        lng={center.lng}
        className="markerGoogleMap"
      >
        <i className="fa fa-dot-circle-o" aria-hidden="true" />
      </div>
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default GoogleMap;
