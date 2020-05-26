import { CHANGE_IMPUNT_VALUE } from 'src/actions/user';


const initialState = {
  // ici l'état initial
  isLogged: false,
  email: '',
  password: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IMPUNT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

export default userReducer;
