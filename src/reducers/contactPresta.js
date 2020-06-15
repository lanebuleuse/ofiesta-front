import {
  CHANGE_FIELD_CONTACT,
  PUT_DATA_IN_CONTACT_STATE,
  SEND_EMAIL_SUCCESS,
  REMOVE_EMAIL_MESSAGE,
} from 'src/actions/contactPresta';

const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  message: '',
  date: '',
  messageSend: false,
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

    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        messageSend: true,
      };

    case REMOVE_EMAIL_MESSAGE:
      return {
        ...state,
        messageSend: false,
      };

    default: return state;
  }
};

export default contactPrestaReducer;
