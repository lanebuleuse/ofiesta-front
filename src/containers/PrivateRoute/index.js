import { connect } from 'react-redux';

import PrivateRoute from 'src/components/PrivateRoute';

import { fetchMemberinformation } from 'src/actions/user';

const mapStateToProps = (state) => ({

  isLogged: state.user.isLogged,
  role: state.user.role,
  userid: state.user.userid,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberinformation: () => {
    dispatch(fetchMemberinformation());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
