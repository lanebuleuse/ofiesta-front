import { connect } from 'react-redux';

import ConnectMembers from 'src/components/MemberArea';

import {} from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  genre: state.user.genre,
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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectMembers);
