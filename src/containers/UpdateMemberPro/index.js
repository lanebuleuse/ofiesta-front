import { connect } from 'react-redux';

import UpdateMemberPro from 'src/components/UpdateMemberPro';

import { fetchMemberinformation, changeField, handleUpdateMember } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  genre: state.user.genre,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.user.phone,
  address: state.user.address,
  postalCode: state.user.postalCode,
  city: state.user.city,
  email: state.user.email,
  roles: state.user.roles,
  isLogged: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberinformation: (userId, token) => {
    dispatch(fetchMemberinformation(userId, token));
  },
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleUpdateMember: () => {
    dispatch(handleUpdateMember());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateMemberPro);
