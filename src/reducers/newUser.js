import { CHANGE_IMPUNT_VALUE, CREATE_NEW_USER } from 'src/actions/newUser';


const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  passwordbis: '',
};

const newUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IMPUNT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CREATE_NEW_USER:
      console.log('Passage 3');
      return {
        ...state,
      };

    default: return state;
  }
};

export default newUserReducer;
