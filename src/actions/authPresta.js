// action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CONNECT_PRESTA = 'CONNECT_PRESTA';
export const DISCONNECT_PRESTA = 'DISCONNECT_PRESTA';
export const SAVE_PRESTA = 'SAVE_PRESTA';

// action creators
export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const connectPresta = () => ({
  type: CONNECT_PRESTA,
});

export const savePresta = () => ({
  type: SAVE_PRESTA,
});

export const disconnectPresta = () => ({
  type: DISCONNECT_PRESTA,
});
