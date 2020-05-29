import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listServices: state.services.listServices,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
