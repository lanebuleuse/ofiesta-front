import { connect } from 'react-redux';

import GoogleMap from 'src/components/GoogleMap';

const mapStateToProps = (state) => ({
  center: state.services.currentService.center,
  zoom: state.services.zoom,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleMap);
