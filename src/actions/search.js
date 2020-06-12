export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_SEARCH = 'HANDLE_SEARCH';

export const FETCH_NAME_SERVICE = 'FETCH_NAME_SERVICE';
export const SAVE_NAME_SERVICE = 'SAVE_NAME_SERVICE';
export const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT';
export const SAVE_DEPARTMENT = 'SAVE_DEPARTMENT';
export const LIST_SERVICE_TO_SEARCH = 'LIST_SERVICE_TO_SEARCH';
export const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
export const REMOVE_DEPARTMENT = 'REMOVE_DEPARTMENT';

export const CLEAN_DATA_TO_SEARCH = 'CLEAN_DATA_TO_SEARCH';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const handleSearch = () => ({
  type: HANDLE_SEARCH,
});

export const fetchNameService = () => ({
  type: FETCH_NAME_SERVICE,
});

export const saveNameService = (data) => ({
  type: SAVE_NAME_SERVICE,
  data,
});

export const fetchDepartment = () => ({
  type: FETCH_DEPARTMENT,
});

export const savedepartment = (department) => ({
  type: SAVE_DEPARTMENT,
  department,
});

export const addDepartement = (department, departmentName) => ({
  type: ADD_DEPARTMENT,
  department,
  departmentName,
});

export const removeDepartment = (depCode, depName) => ({
  type: REMOVE_DEPARTMENT,
  depCode,
  depName,
});

export const listOfServiceToSearch = (data) => ({
  type: LIST_SERVICE_TO_SEARCH,
  data,
});

export const cleanDataToSearch = () => ({
  type: CLEAN_DATA_TO_SEARCH,
});
