import axios from 'axios';

import { FETCH_PRO, saveProInformation } from 'src/actions/pro';

const proMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_PRO:
      const authToken = localStorage.getItem('JWT_token');
      const userId = localStorage.getItem('USER_ID');

      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'get',
        responseType: 'json',
        url: `http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/pro/users/${userId}`,
      })
        .then((response) => {
          console.log(response.data);
          console.log(response.data);
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(saveProInformation(response.data[0], response.data[1]));
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
export default proMiddleware;
