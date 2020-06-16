import {
  CHANGE_INPUT_VALUE,
  RESET_AUTH_FORM,
  SHOW_ERROR_CONNECTION_MESSAGE,
  REMOVE_ERROR_MESSAGE,
} from 'src/actions/auth';


const initialState = {
  // ici l'état initial
  email: '',
  password: '',
  authError: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case RESET_AUTH_FORM:
      return {
        ...state,
        email: '',
        password: '',
      };

    case SHOW_ERROR_CONNECTION_MESSAGE:
      return {
        ...state,
        authError: true,
      };

    case REMOVE_ERROR_MESSAGE:
      return {
        ...state,
        authError: false,
      };

    default: return state;
  }
};

export default authReducer;
