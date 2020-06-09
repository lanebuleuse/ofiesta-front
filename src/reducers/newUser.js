import { CHANGE_NEW_USER_VALUE, VALIDATE_ACCOUNT, RESET_NEW_MEMBER } from 'src/actions/newUser';


const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  city: '',
  address: '',
  postalCode: '',
  email: '',
  phone: '',
  password: '',
  passwordbis: '',
  accountCreated: false,
};

const newUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {


    case VALIDATE_ACCOUNT:
      return {
        ...state,
        accountCreated: true,
        firstname: '',
        lastname: '',
        city: '',
        address: '',
        postalCode: '',
        email: '',
        phone: '',
        password: '',
        passwordbis: '',
      };

    case RESET_NEW_MEMBER:
      return {
        ...state,
        accountCreated: false,
      };

    case CHANGE_NEW_USER_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

export default newUserReducer;
