import axios from 'axios';

import {
  FETCH_MEMBER,
  FETCH_PRO,
  UPDATE_MEMBER,
  UPDATE_FAVORITES,
  DELETE_FAVORITES,
  fetchMemberinformation,
  saveMemberInformation,
  saveProInformation,
  updateOk,
  disconnectUser,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  const authToken = localStorage.getItem('JWT_token');

  switch (action.type) {
    case FETCH_MEMBER:
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'get',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/secure/users/profile',
      })
        .then((response) => {
/*           console.log(response); */
          store.dispatch(saveMemberInformation(response.data));
        })
        .catch((error) => {
          localStorage.clear();
          store.dispatch(disconnectUser());
        });

      next(action);
      break;

    case FETCH_PRO:
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'get',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/secure/pro/profile',
      })
        .then((response) => {
/*           console.log(response); */
          // je voudrais enregistrer response.data dans le state=> nouvelle action
          store.dispatch(saveProInformation(response.data[0], response.data[1]));
        })
        .catch((error) => {
          localStorage.clear();
        });

      next(action);
      break;

    case UPDATE_MEMBER: {
      const {
        firstname,
        lastname,
        address,
        postalCode,
        city,
        email,
        phone,
      } = store.getState().user;
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'put',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/secure/users/profile/edit',
        data: {
          firstName: firstname,
          name: lastname,
          address,
          postalCode,
          city,
          email,
          phone,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(updateOk());
        })
        .catch((error) => {
        });
      next(action);
      break;
    }

    case UPDATE_FAVORITES: {
      console.log(action.serviceId);
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'post',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/secure/users/favorites',
        data: {
          service: action.serviceId,
        },
      })
        .then((response) => {
          store.dispatch(fetchMemberinformation());
        })
        .catch((error) => {
        });
      next(action);
      break;
    }

    case DELETE_FAVORITES: {
      console.log(action.serviceId);
      axios({
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${authToken}`,
        },
        method: 'delete',
        responseType: 'json',
        url: 'http://ec2-100-26-156-71.compute-1.amazonaws.com/api/v1/secure/users/favorites',
        data: {
          service: action.serviceId,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(fetchMemberinformation());
        })
        .catch((error) => {
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
