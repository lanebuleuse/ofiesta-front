import { connect } from 'react-redux';

import MemberArea from 'src/components/MemberArea';

import { fetchMemberinformation } from 'src/actions/user';

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
  isLogged: state.user.isLogged,
  loadding: state.user.loadding,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberinformation: (userId, token) => {
    dispatch(fetchMemberinformation(userId, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberArea);
