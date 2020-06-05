export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_FIELD_CONTACT = 'CHANGE_FIELD_CONTACT';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const changeFieldContact = (newValue, identifier) => ({
  type: CHANGE_FIELD_CONTACT,
  newValue,
  identifier,
});
