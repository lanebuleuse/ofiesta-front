export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SEARCH = 'SEARCH';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const search = () => ({
  type: SEARCH,
});
