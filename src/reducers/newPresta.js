import { CREATE_NEW_PRESTA } from 'src/actions/newPresta';


const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  company: '',
  siret: '',
  email: '',
  phone: '',
  password: '',
  passwordbis: '',
};

const newPrestaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_NEW_PRESTA:

      return {
        ...state,
      };

    default: return state;
  }
};

export default newPrestaReducer;
