import { CHANGE_FIELD } from '../actions/search';

const initialState = {
  /** contenu du champ service */
  service: '',
  /** contenu du champ departement */
  department: '',
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    default: return state;
  }
};

export default searchReducer;
