import axios from 'axios';
import { CONNECT_USER } from 'src/actions/services';

const servicesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER: {
      const { email, password } = store.getState().user;
      console.log('passage 2');
      console.log(email);
      console.log(password);
/*       axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'post',
        responseType: 'json',
        url: 'http://ec2-34-229-70-228.compute-1.amazonaws.com/api/login_check',
        data: {
          username: email, // IMPORTANT
          password,
        },
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);

          if (response.data.token) {
            console.log('token récupéré');
            localStorage.setItem("JWT_token",(response.data.token));
            store.dispatch(fetchUsers());
          }
          return response.data;
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
export default servicesMiddleware;
