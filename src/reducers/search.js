import {
  CHANGE_FIELD,
  ADD_SERVICE_TO_SEARCH,
  REMOVE_SERVICE_TO_SEARCH,
  SAVE_DEPARTMENT,
  ADD_DEPARTMENT,
  REMOVE_DEPARTMENT,
  SAVE_NAME_SERVICE,
}
  from '../actions/search';

const initialState = {
  departmentName: [], /* Content for search department input  */
  departmentCodeToSearch: [], /* List of department number we want to search  */
  departmentList: [], /* List of all department */
  serviceListName: [], /* List of name for all services */
  serviceToSearch: [], /* List of service we want to search */
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case ADD_SERVICE_TO_SEARCH:
      return {
        ...state,
        serviceToSearch: [...state.serviceToSearch, action.service],
      };

    case REMOVE_SERVICE_TO_SEARCH:
      return {
        ...state,
        serviceToSearch: action.listService,
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

    default: return state;
  }
};

export default searchReducer;
