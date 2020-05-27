import { connect } from 'react-redux';

import NewMember from 'src/components/NewMember';

import { changeField, createUser } from 'src/actions/newUser';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.newUser.firstname,
  lastname: state.newUser.lastname,
  email: state.newUser.email,
  phone: state.newUser.phone,
  password: state.newUser.password,
  passwordbis: state.newUser.passwordbis,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  createUser: () => {
    console.log('Passage 1');
    dispatch(createUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMember);
