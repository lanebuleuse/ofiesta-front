import axios from 'axios';

import { FETCH_MEMBER, saveMemberInformation } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_MEMBER:
      const authToken = localStorage.getItem('JWT_token');
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'get',
        responseType: 'json',
        url: `http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/secure/users/${action.userId}`,
      })
        .then((response) => {
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(saveMemberInformation(response.data));
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
export default userMiddleware;
