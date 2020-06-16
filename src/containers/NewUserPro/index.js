import { connect } from 'react-redux';

import NewUserPro from 'src/components/NewUserPro';

import { changeField, createUserPro, changeFieldCreateUserPro, resetNewProMember } from 'src/actions/newUserPro';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.newUserPro.firstname,
  lastname: state.newUserPro.lastname,
  company: state.newUserPro.company,
  siret: state.newUserPro.siret,
  address: state.newUserPro.address,
  postalCode: state.newUserPro.postalCode,
  city: state.newUserPro.city,
  email: state.newUserPro.email,
  phone: state.newUserPro.phone,
  password: state.newUserPro.password,
  passwordbis: state.newUserPro.passwordbis,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  createUserPro: () => {
    dispatch(createUserPro());
  },

  onChange: (value, name) => {
    dispatch(changeFieldCreateUserPro(value, name));
  },

  resetNewProMember: () => {
    dispatch(resetNewProMember());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewUserPro);
