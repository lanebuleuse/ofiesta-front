import axios from 'axios';

import { FETCH_DEPARTMENT, savedepartment, FETCH_NAME_SERVICE, saveNameService } from 'src/actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_DEPARTMENT: {
      axios({
        method: 'get',
        url: 'https://geo.api.gouv.fr/departements',
      })
        .then((response) => {
          store.dispatch(savedepartment(response.data));
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          };
        });
      next(action);
      break;
    }

    case FETCH_NAME_SERVICE: {
      axios({
        method: 'get',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/public/servicelist',
      })
        .then((response) => {
          store.dispatch(saveNameService(response.data));
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default searchMiddleware;
