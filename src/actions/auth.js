// action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CONNECT_USER = 'CONNECT_USER';
export const CONNECT_PRESTA = 'CONNECT_PRESTA';
export const SAVE_USER = 'SAVE_USER';
export const RESET_AUTH_FORM = 'RESET_AUTH_FORM';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const connectPresta = () => ({
  type: CONNECT_PRESTA,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const resetAuthForm = () => ({
  type: RESET_AUTH_FORM,
});
