import { connect } from 'react-redux';

import PrestaArea from 'src/components/PrestaArea';

import {} from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.user.phone,
  adress: state.user.adress,
  cp: state.user.cp,
  city: state.user.city,
  email: state.user.email,
  roles: state.user.roles,
  isLogged: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));

},

handleLogin: () => {
  dispatch(connectPresta());
},

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrestaArea)
