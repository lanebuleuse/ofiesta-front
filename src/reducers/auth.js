import { CHANGE_IMPUNT_VALUE, DISCONNECT_USER } from 'src/actions/auth';


const initialState = {
  // ici l'état initial
  email: 'ereynaud@dbmail.com',
  password: '147258',
  
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_IMPUNT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
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
