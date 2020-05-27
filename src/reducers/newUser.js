import { CHANGE_IMPUNT_VALUE } from 'src/actions/newUser';


const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  checkpassword: '',
};

const newUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IMPUNT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

export default newUserReducer;
