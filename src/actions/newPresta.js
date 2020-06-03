export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CREATE_NEW_PRESTA = 'CREATE_NEW_PRESTA';


// action creators
export const changeField = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const createPresta = () => ({
  type: CREATE_NEW_PRESTA,
});
