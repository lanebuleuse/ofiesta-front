import { connect } from 'react-redux';

import ContactForm from 'src/components/ContactPresta/ContactForm';

import { changeField } from 'src/actions/user';
import { changeFieldContact, putDateInContactState, sendEmailSucces } from 'src/actions/contactPresta';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.user.phone,
  email: state.user.email,
  firstnameContact: state.contactPresta.firstname,
  lastnameContact: state.contactPresta.lastname,
  phoneContact: state.contactPresta.phone,
  emailContact: state.contactPresta.email,
  date: state.contactPresta.date,
  message: state.contactPresta.message,
  messageSend: state.contactPresta.messageSend,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  putDateInContactState: (firstname, lastname, email, phone) => {
    dispatch(putDateInContactState(firstname, lastname, email, phone));
  },

  changeFieldContact: (value, name) => {
    dispatch(changeFieldContact(value, name));
  },

  sendFeedback: (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables,
    ).then(() => {
      console.log('Email successfully sent!');
      dispatch(sendEmailSucces());
    })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
