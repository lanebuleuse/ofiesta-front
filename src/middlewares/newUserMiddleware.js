import axios from 'axios';

import { CREATE_NEW_USER } from 'src/actions/newUser';

const newUserMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CREATE_NEW_USER: {
      const {
        firstname,
        lastname,
        email,
        phone,
        password,
        passwordbis,
      } = store.getState().newUser;
      console.log('Passage 2');
      console.log(firstname);
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
export default newUserMiddleware;