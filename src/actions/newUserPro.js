export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CREATE_USER_PRO = 'CREATE_USER_PRO';
export const CHANGE_NEW_USERPRO_VALUE = 'CHANGE_NEW_USERPRO_VALUE';

// action creators
export const changeFieldCreateUserPro = (value, name) => ({
  type: CHANGE_NEW_USERPRO_VALUE,
  value,
  name,
});

export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const createUserPro = () => ({
  type: CREATE_USER_PRO,
});
