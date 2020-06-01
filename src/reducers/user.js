import { CHANGE_IMPUNT_VALUE, CONNECT_USER, DISCONNECT_USER } from 'src/actions/user';


const initialState = {
  // ici l'état initial
  isLogged: false,
  firstname: 'Jacques',
  lastname: 'Daniel',
  phone: '0621232729',
  adress: '15 rue du blanc poney',
  cp: '74000',
  city: 'annecy',
  email: 'Jacquesdaniel@jeboistrop.com',
  favori: [],
  role: 'admin',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IMPUNT_VALUE:
      console.log('je change la valeur');
      return {
        ...state,
        [action.name]: action.value,
      };

    case CONNECT_USER:
      console.log('passage 3');
      return {
        ...state,
        isLogged: true,
      };

    case DISCONNECT_USER:
      return {
        ...state,
        isLogged: false,
      };

    default: return state;
  }
};

export default userReducer;
