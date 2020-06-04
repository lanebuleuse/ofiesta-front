import { CHANGE_FIELD, SAVE_DEPARTMENT } from '../actions/search';

const initialState = {
  /** contenu du champ service */
  service: '',
  /** contenu du champ departement */
  department: '',
  departmentList: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_DEPARTMENT:
      return {
        ...state,
        departmentList: action.department,
      };

    default: return state;
  }
};

export default searchReducer;
