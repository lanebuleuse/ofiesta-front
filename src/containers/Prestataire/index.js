import { connect } from 'react-redux';

import Prestataire from 'src/components/Prestataire';

import { retrieveLocation, fetchServiceInformation } from 'src/actions/services';

import { updateFavorites, deleteFavorites } from 'src/actions/user';

const mapStateToProps = (state) => ({
  currentService: state.services.currentService,
  loading: state.services.currentService.loading,
  isLogged: state.user.isLogged,
  favorites: state.user.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  retrieveLocation: (address) => {
    dispatch(retrieveLocation(address));
  },

  fetchServiceInformation: (id) => {
    dispatch(fetchServiceInformation(id));
  },

  updateFavorites: (serviceId) => {
    dispatch(updateFavorites(serviceId));
  },

  deleteFavorites: (serviceId) => {
    dispatch(deleteFavorites(serviceId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Prestataire);
