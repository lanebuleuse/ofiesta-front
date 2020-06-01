import axios from 'axios';
import { RETRIEVE_LOCATION, saveLocation } from 'src/actions/googlemap';
import Geocode from 'react-geocode';

const googleMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
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
export default googleMiddleware;
