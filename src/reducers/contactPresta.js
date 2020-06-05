import {
  CHANGE_FIELD_CONTACT,
} from 'src/actions/contactPresta';

const initialState = {
  // ici l'état initial
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
    default: return state;
  }
};

export default contactPrestaReducer;
