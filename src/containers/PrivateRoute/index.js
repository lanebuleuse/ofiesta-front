import { connect } from 'react-redux';

import PrivateRoute from 'src/components/PrivateRoute';

import { } from 'src/actions/newUser';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
