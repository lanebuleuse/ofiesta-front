export const CHANGE_IMPUNT_VALUE = 'CHANGE_IMPUNT_VALUE';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_IMPUNT_VALUE,
  value,
  name,
});

export const createUser = () => ({
  type: CREATE_NEW_USER,
});
