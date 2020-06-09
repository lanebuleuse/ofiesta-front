/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_SERVICES,
  RETRIEVE_LOCATION,
  FETCH_SERVICE_INFO,
  retrieveLocation,
  saveServiceInformation,
  saveServices,
} from 'src/actions/services';

import Geocode from 'react-geocode';

const servicesMiddleware = (store) => (next) => (action) => {
  const { actualPage } = store.getState().services;

  switch (action.type) {
    case FETCH_SERVICES:
      axios.get(`http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/public/services?page=${actualPage}`)
        .then((response) => {
/*           console.log(response); */
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(saveServices(response.data));
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });

      next(action);
      break;

    case RETRIEVE_LOCATION:
      const address = `${action.data.address} ${action.data.postalCode} ${action.data.city}`;
      Geocode.setApiKey('AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw');
      Geocode.setLanguage('fr');
      Geocode.setRegion('fr');
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        (response) => {
          /* const { lat, lng } = response.results[0].geometry.location; */
          const { lat, lng } = response.results[0].geometry.location;
          store.dispatch(saveServiceInformation(action.data, lat, lng));
        },
        (error) => {
          if (error) {
            store.dispatch(saveServiceInformation(action.data));
            console.log(error);
          }
        },
      );
      next(action);
      break;

    case FETCH_SERVICE_INFO:
      axios.get(`http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/public/services/${action.id}`)
        .then((response) => {
          console.log(response);
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(retrieveLocation(response.data));
        })
        .catch((error) => {
/*           console.warn(error); */
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default servicesMiddleware;
