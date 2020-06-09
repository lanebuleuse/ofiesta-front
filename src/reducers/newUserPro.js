import { CREATE_NEW_PRESTA, CHANGE_INPUT_VALUE } from 'src/actions/newPresta';


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
};

const newUserProReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_NEW_PRESTA:

      return {
        ...state,
      };

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

export default newUserProReducer;
