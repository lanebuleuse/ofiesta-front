import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';


import './googlemaps.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ center, zoom, service, retrieveLocation }) => {
  const address = `${service.address} ${service.postalCode} ${service.city}`;
  useEffect(() => {
    retrieveLocation(address);
  }, []);
  console.log(center);
  return (
    <div className="googlemaps">
      <GoogleMapReact
        /* bootstrapURLKeys={{ key: 'AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw' }} */
        defaultCenter={center}
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
};

GoogleMap.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  service: PropTypes.object.isRequired,
  retrieveLocation: PropTypes.func.isRequired,
};

export default GoogleMap;
