import { connect } from 'react-redux';

import ConnectMembers from 'src/components/ConnectMembers';

import { changeField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectMembers);
