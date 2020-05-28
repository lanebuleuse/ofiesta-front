import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';


const mapStateToProps = (state) => ({
  // Retrieve in the state if user is logged
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
