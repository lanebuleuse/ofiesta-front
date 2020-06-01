import React from 'react';

import GoogleMapReact from 'google-map-react';

import './googlemaps.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMaps = () => {
  const defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488,
    },
    zoom: 11,
  };
  return (
    <div className="googlemaps">
      <GoogleMapReact
        /* bootstrapURLKeys={{ key: 'AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw' }} */
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={48.8534}
          lng={2.3488}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
