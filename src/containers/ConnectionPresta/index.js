import { connect } from 'react-redux';

import ConnectionPresta from 'src/components/ConnectionPresta';

import { changeField, connectPresta } from 'src/actions/authPresta';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  email: state.authPresta.email,
  password: state.authPresta.password,
  isLogged: state.authPresta.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleLogin: () => {
    dispatch(connectPresta());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectionPresta);
