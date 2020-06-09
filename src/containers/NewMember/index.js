import { connect } from 'react-redux';

import NewMember from 'src/components/NewMember';

import { changeFieldCreateUser, createUser, resetNewMember } from 'src/actions/newUser';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.newUser.firstname,
  lastname: state.newUser.lastname,
  address: state.newUser.address,
  postalCode: state.newUser.postalCode,
  city: state.newUser.city,
  email: state.newUser.email,
  phone: state.newUser.phone,
  password: state.newUser.password,
  passwordbis: state.newUser.passwordbis,
  accountCreated: state.newUser.accountCreated,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  createUser: () => {
    dispatch(createUser());
  },
  resetNewMember: () => {
    dispatch(resetNewMember());
  },
  onChange: (value, name) => {
    dispatch(changeFieldCreateUser(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMember);
