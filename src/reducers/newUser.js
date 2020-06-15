import {
  CHANGE_NEW_USER_VALUE,
  VALIDATE_ACCOUNT,
  RESET_NEW_MEMBER,
  REMOVE_ACCOUNT_MESSAGE,
} from 'src/actions/newUser';


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
  accountCreated: true,
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

    case CHANGE_NEW_USER_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case REMOVE_ACCOUNT_MESSAGE:
      return {
        ...state,
        accountCreated: false,
      };

    default: return state;
  }
};

export default newUserReducer;
