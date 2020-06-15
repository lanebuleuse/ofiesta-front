import { connect } from 'react-redux';

import ConnectPresta from 'src/components/ConnectPresta';

import { changeField, connectPresta, resetAuthProForm } from 'src/actions/authPresta';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  email: state.authPresta.email,
  password: state.authPresta.password,
  isLogged: state.user.isLogged,
  roles: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleLogin: () => {
    dispatch(connectPresta());
  },

  resetAuthForm: () => {
    dispatch(resetAuthProForm());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectPresta);
