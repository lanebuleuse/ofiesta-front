import { connect } from 'react-redux';

import Prestataire from 'src/components/Prestataire';

import { retrieveLocation } from 'src/actions/services';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
  isLogged: state.user.isLogged,
  center: state.services.center,
  zoom: state.services.zoom,
});

const mapDispatchToProps = (dispatch) => ({
  retrieveLocation: (address) => {
    dispatch(retrieveLocation(address));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Prestataire);
