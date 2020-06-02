import { connect } from 'react-redux';

import GoogleMap from 'src/components/GoogleMap';

import { retrieveLocation } from 'src/actions/googlemap';

const mapStateToProps = (state) => ({
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
)(GoogleMap);
