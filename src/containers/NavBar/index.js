import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

import { disconnectUser } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  // Retrieve in the state if user is logged
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(disconnectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
