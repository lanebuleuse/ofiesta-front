import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
});

const mapDispatchToProps = (dispatch) => ({

  fetchServices: () => {
    console.log('Containers');
    dispatch(fetchServices());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
