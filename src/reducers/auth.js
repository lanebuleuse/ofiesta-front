import { CHANGE_INPUT_VALUE, DISCONNECT_USER } from 'src/actions/auth';


const initialState = {
  // ici l'état initial
  email: 'ereynaud@dbmail.com',
  password: '147258',
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_INPUT_VALUE:
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
