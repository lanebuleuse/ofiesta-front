import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

import { disconnectUser } from 'src/actions/user';
import { changePageService, fetchServices, clearCurrentService } from 'src/actions/services';

const mapStateToProps = (state) => ({
  // Retrieve in the state if user is logged
  isLogged: state.user.isLogged,
  roles: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(disconnectUser());
  },

  fetchServices: () => {
    dispatch(fetchServices());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
