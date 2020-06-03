import { connect } from 'react-redux';

import NewPresta from 'src/components/NewPresta';

import { changeField, createPresta } from 'src/actions/newPresta';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.newPresta.firstname,
  lastname: state.newPresta.lastname,
  company: state.newPresta.company,
  siret: state.newPresta.siret,
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
  createUser: () => {
    dispatch(createPresta());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPresta);
