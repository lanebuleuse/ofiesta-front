import { connect } from 'react-redux';

import PrivateRoute from 'src/components/PrivateRoute';

const mapStateToProps = (state) => ({

  isLogged: state.user.isLogged,
  role: state.user.role,
  userid: state.user.userid,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
