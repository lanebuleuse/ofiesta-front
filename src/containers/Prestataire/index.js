import { connect } from 'react-redux';

import Prestataire from 'src/components/Prestataire';

import { retrieveLocation, fetchServiceInformation } from 'src/actions/services';

const mapStateToProps = (state) => ({
  currentService: state.services.currentService,
  loading: state.services.currentService.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  retrieveLocation: (address) => {
    dispatch(retrieveLocation(address));
  },

  fetchServiceInformation: (id) => {
    dispatch(fetchServiceInformation(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Prestataire);
