import {
  SAVE_CONNECTION_INFO,
  SAVE_PRO,
  CHANGE_FIELD,
  CONNECT_USER,
  DISCONNECT_USER,
} from 'src/actions/pro';


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
  serviceList: [],

};

const proReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONNECTION_INFO:
      return {
        ...state,
        role: action.role,
        userid: action.userid,
        isLogged: true,
      };

    case SAVE_PRO:
      return {
        ...state,
        firstname: action.data.firstName,
        lastname: action.data.name,
        phone: action.data.phone,
        email: action.data.email,
        address: action.data.address,
        postalCode: action.data.postalCode,
        city: action.data.city,
        serviceList: action.serviceList,
      };

    case DISCONNECT_USER:
      return {
        ...state,
        isLogged: false,
      };

    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default: return state;
  }
};

export default proReducer;
