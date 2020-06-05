import { connect } from 'react-redux';

import ContactForm from 'src/components/ContactPresta/ContactForm';

import { changeField } from 'src/actions/user';
import { changeFieldContact } from 'src/actions/contactPresta';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.contactPresta.phone,
  email: state.contactPresta.email,
  date: state.contactPresta.date,
  message: state.contactPresta.message,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  changeFieldContact: (value, name) => {
    dispatch(changeFieldContact(value, name));
  },

  sendFeedback: (templateId, variables) => {
    console.log(variables);
    window.emailjs.send(
      'gmail', templateId,
      variables,
    ).then((res) => {
      console.log('Email successfully sent!');
    })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
