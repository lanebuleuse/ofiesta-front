import { CHANGE_IMPUNT_VALUE, CREATE_NEW_USER } from 'src/actions/newUser';


const initialState = {
  // ici l'état initial
  firstname: 'toto',
  lastname: 'ju',
  email: 'gre74@aol.com',
  phone: '0670382221',
  password: 'qsdqsd74',
  passwordbis: 'qsdqsd74',
};

const newUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IMPUNT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CREATE_NEW_USER:
      console.log('Passage 3');
      return {
        ...state,
      };

    default: return state;
  }
};

export default newUserReducer;
