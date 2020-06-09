import { CHANGE_NEW_USERPRO_VALUE } from 'src/actions/newUserPro';


const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  company: '',
  siret: '',
  city: '',
  address: '',
  postalCode: '',
  email: '',
  phone: '',
  password: '',
  passwordbis: '',
  accountCreated: false,
};

const newUserProReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEW_USERPRO_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

export default newUserProReducer;
