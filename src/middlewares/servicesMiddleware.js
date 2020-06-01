import axios from 'axios';
import { FETCH_SERVICES, saveServices } from 'src/actions/services';

const servicesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_SERVICES:
      console.log('Middleware');
      axios.get('http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/public/services')
        .then((response) => {
          console.log(response);
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(saveServices(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default servicesMiddleware;
