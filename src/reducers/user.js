import { CHANGE_IMPUNT_VALUE, CONNECT_USER } from 'src/actions/user';


const initialState = {
  // ici l'état initial
  isLogged: false,
  email: '',
  password: '',
  favori: [],
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

    default: return state;
  }
};

export default userReducer;
