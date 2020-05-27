import axios from 'axios';

import { CONNECT_USER } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER: {
      const { email, password } = store.getState().user;
      console.log('passage 2');
      console.log(email);
      console.log(password);
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
export default userMiddleware;