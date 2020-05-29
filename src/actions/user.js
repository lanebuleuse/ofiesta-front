// action types
export const CHANGE_IMPUNT_VALUE = 'CHANGE_IMPUNT_VALUE';
export const CONNECT_USER = 'CONNECT_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_IMPUNT_VALUE,
  value,
  name,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});
