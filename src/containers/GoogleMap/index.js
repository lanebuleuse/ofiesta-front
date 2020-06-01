import { connect } from 'react-redux';

import GoogleMap from 'src/components/GoogleMap';

import { retrieveLocation } from 'src/actions/googlemap';

const mapStateToProps = (state) => ({
  center: state.google.center,
  zoom: state.google.zoom,
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
