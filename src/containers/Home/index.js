import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { } from 'src/actions/user';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
});

const mapDispatchToProps = (dispatch) => ({



});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
