import { SAVE_CONNECTION_INFO, SAVE_MEMBER, CHANGE_FIELD } from 'src/actions/user';


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
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONNECTION_INFO:
      return {
        ...state,
        role: action.role,
        userid: action.userid,
        isLogged: true,
      };

    case SAVE_MEMBER:
      return {
        ...state,
        firstname: action.data.firstName,
        lastname: action.data.name,
        phone: action.data.phone,
        email: action.data.email,
        address: action.data.address,
        postalCode: action.data.postalCode,
        city: action.data.city,
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
