import {
  CHANGE_FIELD,

  SAVE_DEPARTMENT,
  LIST_SERVICE_TO_SEARCH,
  ADD_DEPARTMENT,
  REMOVE_DEPARTMENT,
  SAVE_NAME_SERVICE,
  CLEAN_DATA_TO_SEARCH,
  DELETE_INPUT_VALUE,
}
  from '../actions/search';

const initialState = {
  departmentList: [], /* List of all department */
  serviceListName: [], /* List of name for all services */
  departmentName: [], /* Content for search department input  */
  departmentCodeToSearch: [], /* List of department number we want to search  */
  serviceIdToSearch: [], /* List of service we want to search  */
  serviceName: [], /* List of service we want to search */
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case LIST_SERVICE_TO_SEARCH:
      return {
        ...state,
        serviceIdToSearch: action.data,
      };

    case SAVE_NAME_SERVICE:
      return {
        ...state,
        serviceListName: action.data,
      };

    case ADD_DEPARTMENT:
      return {
        ...state,
        departmentCodeToSearch: [...state.departmentCodeToSearch, action.department],
        departmentName: [...state.departmentName, action.departmentName],
      };

    case REMOVE_DEPARTMENT:
      return {
        ...state,
        departmentCodeToSearch: action.depCode,
        departmentName: action.depName,
      };

    case SAVE_DEPARTMENT:
      return {
        ...state,
        departmentList: action.department,
      };

    case CLEAN_DATA_TO_SEARCH:
      return {
        ...state,
        departmentCodeToSearch: [],
        serviceIdToSearch: [],
        departmentName: [],
      };

    case DELETE_INPUT_VALUE:
      return {
        ...state,
        departmentName: [], /* Content for search department input  */
        departmentCodeToSearch: [], /* List of department number we want to search  */
      };

    default: return state;
  }
};

export default searchReducer;
