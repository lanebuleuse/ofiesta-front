import { SAVE_CONNECTION_INFO } from 'src/actions/user';


const initialState = {
  // ici l'état initial
  userid: null,
  firstname: '',
  lastname: '',
  phone: '',
  adress: '',
  cp: '',
  city: '',
  email: '',
  favori: [],
  role: [],
  password: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONNECTION_INFO:
      return {
        ...state,
        role: action.role,
        userid: action.userid,
      };
    default: return state;
  }
};

export default userReducer;
