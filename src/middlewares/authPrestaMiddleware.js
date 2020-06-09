import axios from 'axios';

import { CONNECT_PRESTA } from 'src/actions/auth';
import { saveConnectionInfo } from 'src/actions/user';

const authPrestaMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_PRESTA: {
      const { email, password } = store.getState().authPresta;
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'post',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/login_check',
        data: {
          username: email, // IMPORTANT
          // eslint-disable-next-line object-shorthand
          password: password,
        },
      })
        .then((response) => {
          if (response.data.token) {
            console.log(response.data);
            localStorage.setItem('JWT_token', (response.data.token));
            localStorage.setItem('USER_ID', (response.data.data.userid));
            store.dispatch(saveConnectionInfo(response.data.data.roles, response.data.data.userid));
          }
        })
        .catch((error) => {
          console.log(error);
          // console.log(error.response.status);
          // on pourrait différencier le message d'erreur selon le code d'erreur
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authPrestaMiddleware;
