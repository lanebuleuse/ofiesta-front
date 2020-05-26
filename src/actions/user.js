// action types
export const CHANGE_IMPUNT_VALUE = 'CHANGE_IMPUNT_VALUE';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_IMPUNT_VALUE,
  value,
  name,
});
