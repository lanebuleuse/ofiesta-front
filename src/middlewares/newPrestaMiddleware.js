import axios from 'axios';

import { CREATE_NEW_PRESTA } from 'src/actions/newPresta';

const newPrestaMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CREATE_NEW_PRESTA: {
      const {
        firstname,
        lastname,
        company,
        siret,
        email,
        phone,
        password,
        passwordbis,
      } = store.getState().newPresta;
/*       axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
          email,
          // strictement équivalent à :
          // email: email,
          password,
        },
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(loggingUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        }); */
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default newPrestaMiddleware;
