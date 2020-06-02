import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
  loading: state.services.loading,
});

const mapDispatchToProps = (dispatch) => ({

  fetchServices: () => {
    dispatch(fetchServices());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
