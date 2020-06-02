import { CHANGE_IMPUNT_VALUE, CONNECT_USER, DISCONNECT_USER, SAVE_CONNECTION_INFO } from 'src/actions/auth';


const initialState = {
  // ici l'état initial
  email: 'ereynaud@dbmail.com',
  password: '147258',
  isLogged: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_IMPUNT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CONNECT_USER:
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

export default authReducer;
