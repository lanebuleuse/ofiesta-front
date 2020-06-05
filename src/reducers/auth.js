import { CHANGE_INPUT_VALUE } from 'src/actions/auth';


const initialState = {
  // ici l'état initial
  email: 'test@test.test',
  password: '147258',
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

export default authReducer;
