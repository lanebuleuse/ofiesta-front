import { CHANGE_INPUT_VALUE, CREATE_NEW_USER } from 'src/actions/newUser';


const initialState = {
  // ici l'état initial
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  passwordbis: '',
};

const newUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {


    case CREATE_NEW_USER:

      return {
        ...state,
      };

    default: return state;
  }
};

export default newUserReducer;
