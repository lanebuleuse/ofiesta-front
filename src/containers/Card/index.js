import { connect } from 'react-redux';

import Card from 'src/components/Card';

import { updateFavorites, deleteFavorites } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  favorites: state.user.favorites,
});

const mapDispatchToProps = (dispatch) => ({
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
)(Card);
