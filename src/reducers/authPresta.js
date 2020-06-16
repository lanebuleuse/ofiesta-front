import { CHANGE_INPUT_VALUE, DISCONNECT_PRESTA, RESET_AUTH_PRO_FORM } from 'src/actions/authPresta';


const initialState = {
  // ici l'état initial
  email: '',
  password: '',
};

const authPrestaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case DISCONNECT_PRESTA:
      return {
        ...state,
        isLogged: false,
      };

    case RESET_AUTH_PRO_FORM:
      return {
        ...state,
        email: '',
        password: '',
      };

    default: return state;
  }
};

export default authPrestaReducer;
