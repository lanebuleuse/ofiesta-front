import { connect } from 'react-redux';

import PrivateRoute from 'src/components/PrivateRoute';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  isLogged: state.auth.isLogged,
  role: state.user.role,
  userid: state.user.userid,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
