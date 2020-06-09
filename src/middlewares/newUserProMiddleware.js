import axios from 'axios';

import { CREATE_USER_PRO } from 'src/actions/newUserPro';

const newUserProMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER_PRO: {
      console.log('Middleware');
      const {
        firstname,
        lastname,
        address,
        postalCode,
        city,
        email,
        phone,
        password,
        siret,
        company,
      } = store.getState().newUserPro;
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'post',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/register/pro',
        data: {
          firstName: firstname,
          name: lastname,
          address,
          postalCode,
          city,
          email,
          phone,
          password,
          siret,
          businessName: company,
        },
      })
        .then((response) => {
          console.log(response);
          /* store.dispatch(validateAccount()); */
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

export default newUserProMiddleware;
