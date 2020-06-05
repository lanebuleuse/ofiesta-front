import {
  CHANGE_FIELD,
  SAVE_DEPARTMENT,
  ADD_DEPARTMENT,
  REMOVE_DEPARTMENT,
}
from '../actions/search';

const initialState = {
  /** contenu du champ service */
  service: '',
  /** contenu du champ departement */
  departmentName: [],
  departmentCode: [],
  departmentList: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case ADD_DEPARTMENT:
      return {
        ...state,
        departmentCode: [...state.departmentCode, action.department],
        departmentName: [...state.departmentName, action.departmentName],
      };

    case REMOVE_DEPARTMENT:
      return {
        ...state,
        departmentCode: action.depCode,
        departmentName: action.depName,
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
