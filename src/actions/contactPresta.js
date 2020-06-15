export const CHANGE_FIELD_CONTACT = 'CHANGE_FIELD_CONTACT';
export const PUT_DATA_IN_CONTACT_STATE = 'PUT_DATA_IN_CONTACT_STATE';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const REMOVE_EMAIL_MESSAGE = 'REMOVE_EMAIL_MESSAGE';

export const changeFieldContact = (newValue, identifier) => ({
  type: CHANGE_FIELD_CONTACT,
  newValue,
  identifier,
});

export const putDateInContactState = (firstname, lastname, email, phone) => ({
  type: PUT_DATA_IN_CONTACT_STATE,
  firstname,
  lastname,
  email,
  phone,
});

export const sendEmailSucces = () => ({
  type: SEND_EMAIL_SUCCESS,
});

export const removeEmailMessage = () => ({
  type: REMOVE_EMAIL_MESSAGE,
})
