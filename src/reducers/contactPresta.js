import {
  CHANGE_FIELD_CONTACT,
  PUT_DATA_IN_CONTACT_STATE,
} from 'src/actions/contactPresta';

const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  message: '',
  date: '',
};

const contactPrestaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_CONTACT:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case PUT_DATA_IN_CONTACT_STATE:
      return {
        ...state,
        phone: action.phone,
        email: action.email,
        firstname: action.firstname,
        lastname: action.lastname,
      };

    default: return state;
  }
};

export default contactPrestaReducer;
