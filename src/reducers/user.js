import {
  SAVE_CONNECTION_INFO,
  SAVE_MEMBER,
  CHANGE_FIELD,
  DISCONNECT_USER,
} from 'src/actions/user';


const initialState = {
  // ici l'état initial
  userid: null,
  firstname: '',
  lastname: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  email: '',
  favori: [],
  role: [],
  password: '',
  isLogged: false,
  date: '',
  message: '',
  loading: true,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONNECTION_INFO:
      return {
        ...state,
        role: action.role,
        userid: action.userid,
        isLogged: true,
        loading: false,
      };

    case SAVE_MEMBER:
      return {
        ...state,
        role: action.data.roles,
        firstname: action.data.firstName,
        lastname: action.data.name,
        phone: action.data.phone,
        email: action.data.email,
        address: action.data.address,
        postalCode: action.data.postalCode,
        city: action.data.city,
        loading: false,
        isLogged: true,
      };

    case DISCONNECT_USER:
      return {
        ...state,
        isLogged: false,
        loading: true,
        role: [],
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        postalCode: '',
        city: '',
      };

    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default: return state;
  }
};

export default userReducer;
