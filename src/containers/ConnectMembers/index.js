 import { connect } from 'react-redux';

import ConnectMembers from 'src/components/ConnectMembers';

import { changeField, connectUser, resetAuthForm } from 'src/actions/auth';
import { resetNewMember } from 'src/actions/newUser';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.user.isLogged,
  accountCreated: state.newUser.accountCreated,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleLogin: () => {
    dispatch(connectUser());
  },

  resetNewMember: () => {
    dispatch(resetNewMember());
  },

  resetAuthForm: () => {
    dispatch(resetAuthForm());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectMembers);
