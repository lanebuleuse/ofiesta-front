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
  favorites: state.user.favorites,
  isLogged: state.user.isLogged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberinformation: () => {
    dispatch(fetchMemberinformation());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberArea);
