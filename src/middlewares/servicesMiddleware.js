import axios from 'axios';
import { FETCH_SERVICES, RETRIEVE_LOCATION, saveServices, saveLocation } from 'src/actions/services';

import Geocode from 'react-geocode';

const servicesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_SERVICES:
      axios.get('http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/public/services')
        .then((response) => {
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(saveServices(response.data));
        })
        .catch((error) => {
/*           console.warn(error); */
        });

      next(action);
      break;

    case RETRIEVE_LOCATION:
      const { address } = action;
      console.log(address);
      Geocode.setApiKey('AIzaSyCuLVroL1_U2RRxad_rB99nnnUg3IRx7qw');
      Geocode.setLanguage('fr');
      Geocode.setRegion('fr');
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        (response) => {
          /* const { lat, lng } = response.results[0].geometry.location; */
          const { lat, lng } = response.results[0].geometry.location;
          store.dispatch(saveLocation(lat, lng));
        },
        (error) => {
          console.error(error);
        },
      );
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default servicesMiddleware;
