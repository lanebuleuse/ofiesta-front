export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CREATE_USER_PRO = 'CREATE_USER_PRO';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const createUserPro = () => ({
  type: CREATE_USER_PRO,
});
