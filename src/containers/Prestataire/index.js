import { connect } from 'react-redux';

import Prestataire from 'src/components/Prestataire';

import { } from 'src/actions/services';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Prestataire);
