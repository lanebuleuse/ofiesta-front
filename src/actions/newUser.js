export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const createUser = () => ({
  type: CREATE_NEW_USER,
});
