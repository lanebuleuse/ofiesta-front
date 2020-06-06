import {
  CHANGE_FIELD,
  SAVE_DEPARTMENT,
  ADD_DEPARTMENT,
  REMOVE_DEPARTMENT,
  SAVE_NAME_SERVICE,
}
  from '../actions/search';

const initialState = {
  departmentName: [], /* Content for search department input  */
  departmentCode: [], /* List of department number we want to search  */
  departmentList: [], /* List of all department */
  serviceListName: [], /* List of name for all services */
  serviceToSearch: '',
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_NAME_SERVICE:
      return {
        ...state,
        serviceListName: action.data,
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
