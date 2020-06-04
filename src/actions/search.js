export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SEARCH = 'SEARCH';
export const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT';
export const SAVE_DEPARTMENT = 'SAVE_DEPARTMENT';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const search = () => ({
  type: SEARCH,
});

export const fetchDepartment = () => ({
  type: FETCH_DEPARTMENT,
});

export const savedepartment = (department) => ({
  type: SAVE_DEPARTMENT,
  department,
});
