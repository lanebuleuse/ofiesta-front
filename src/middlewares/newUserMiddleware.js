import axios from 'axios';

import { CREATE_NEW_USER, validateAccount } from 'src/actions/newUser';

const newUserMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CREATE_NEW_USER: {
      const {
        firstname,
        lastname,
        address,
        postalCode,
        city,
        email,
        phone,
        password,
      } = store.getState().newUser;
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'post',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/register/user ',
        data: {
          firstName: firstname,
          name: lastname,
          address,
          postalCode,
          city,
          email,
          phone,
          password,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(validateAccount());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default newUserMiddleware;
