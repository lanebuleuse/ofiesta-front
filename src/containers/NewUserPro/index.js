import { connect } from 'react-redux';

import NewUserPro from 'src/components/NewUserPro';

import { changeField, createUserPro } from 'src/actions/newUserPro';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.newPresta.firstname,
  lastname: state.newPresta.lastname,
  company: state.newPresta.company,
  siret: state.newPresta.siret,
  address: state.newPresta.address,
  postalCode: state.newPresta.postalCode,
  city: state.newPresta.city,
  email: state.newPresta.email,
  phone: state.newPresta.phone,
  password: state.newPresta.password,
  passwordbis: state.newPresta.passwordbis,
});

const mapDispatchToProps = (dispatch) => ({
  // Send value and name with changeField to action
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  createUserPro: () => {
    dispatch(createUserPro());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewUserPro);
