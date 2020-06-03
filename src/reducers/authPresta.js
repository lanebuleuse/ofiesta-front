import { CHANGE_INPUT_VALUE, DISCONNECT_PRESTA } from 'src/actions/authPresta';


const initialState = {
  // ici l'état initial
  email: 'ereynaud@dbmail.com',
  password: '147258',
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

    default: return state;
  }
};

export default authPrestaReducer;
