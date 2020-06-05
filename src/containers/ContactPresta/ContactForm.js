import { connect } from 'react-redux';

import ContactForm from 'src/components/ContactPresta/ContactForm';

import { changeField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.user.phone,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  sendFeedback: (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      //variables,
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
