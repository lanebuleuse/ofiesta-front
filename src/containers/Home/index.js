import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { changePageService, fetchServices } from 'src/actions/services';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
  actualPage: state.services.actualPage,
  numberOPage: state.services.numberOPage,
});

const mapDispatchToProps = (dispatch) => ({
  changePageService: (page) => {
    dispatch(changePageService(page));
  },

  fetchServices: () => {
    dispatch(fetchServices());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
