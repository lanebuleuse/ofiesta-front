import { connect } from 'react-redux';

import ConnectMembers from 'src/components/ConnectMembers';

import { changeField, connectUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleLogin: () => {
    console.log('Passage 1');
    dispatch(connectUser());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectMembers);
