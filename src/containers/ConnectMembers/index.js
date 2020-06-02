import { connect } from 'react-redux';

import ConnectMembers from 'src/components/ConnectMembers';

import { changeField, connectUser } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleLogin: () => {
    dispatch(connectUser());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectMembers);
