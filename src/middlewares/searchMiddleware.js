import axios from 'axios';

import {
  FETCH_DEPARTMENT,
  savedepartment,
  FETCH_NAME_SERVICE,
  saveNameService,
  HANDLE_SEARCH,
} from 'src/actions/search';

import { saveSearch } from 'src/actions/services';

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

    case HANDLE_SEARCH: {
      const { serviceToSearch, departmentCodeToSearch } = store.getState().search;
/*       axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'post',
        responseType: 'json',
        url: '',
        data: {
          service: serviceToSearch,
          department: departmentCodeToSearch,
        },
      })
        .then((response) => {
          if (response.data.token) {
            store.dispatch(saveSearch(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          // console.log(error.response.status);
          // on pourrait différencier le message d'erreur selon le code d'erreur
        }); */
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default searchMiddleware;
