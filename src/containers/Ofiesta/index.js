import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';
import { fetchDepartment } from 'src/actions/search';

const mapStateToProps = (state) => ({
  services: state.services.listServices,
  loading: state.services.loading,
  departmentList: state.search.departmentList,
});

const mapDispatchToProps = (dispatch) => ({

  fetchServices: () => {
    dispatch(fetchServices());
  },

  fetchDepartment: () => {
    dispatch(fetchDepartment());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
