export const CHANGE_NEW_USER_VALUE = 'CHANGE_NEW_USER_VALUE';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';

export const VALIDATE_ACCOUNT = 'VALIDATE_ACCOUNT';
export const RESET_NEW_MEMBER = 'RESET_NEW_MEMBER';

export const REMOVE_ACCOUNT_MESSAGE = 'REMOVE_ACCOUNT_MESSAGE';


// action creators
export const changeFieldCreateUser = (value, name) => ({
  type: CHANGE_NEW_USER_VALUE,
  value,
  name,
});

export const createUser = () => ({
  type: CREATE_NEW_USER,
});

export const validateAccount= () => ({
  type: VALIDATE_ACCOUNT,
});

export const resetNewMember = () => ({
  type: RESET_NEW_MEMBER,
});

export const removeAccountMessage = () => ({
  type: REMOVE_ACCOUNT_MESSAGE,
});
