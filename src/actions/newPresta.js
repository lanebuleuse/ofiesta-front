export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});
