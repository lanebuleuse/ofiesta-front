import axios from 'axios';

import { FETCH_MEMBER, saveMemberInformation } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  console.log('je passe dans le middleware');
  console.log(action.type);
  switch (action.type) {
    case FETCH_MEMBER:
      console.log('Middleware entrée')
      axios.get(`http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/public/users/${action.userId}`)
        .then((response) => {
          console.log(response);
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
