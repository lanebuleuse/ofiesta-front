import { CHANGE_INPUT_VALUE, RESET_AUTH_FORM } from 'src/actions/auth';


const initialState = {
  // ici l'état initial
  email: '',
  password: '',
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

    default: return state;
  }
};

export default authReducer;
