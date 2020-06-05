import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';
import { fetchDepartment } from 'src/actions/search';
import { connectUser } from 'src/actions/user';

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

  checkUserConnected: () => {
    const authToken = localStorage.getItem('JWT_token');
    if (authToken) {
      dispatch(connectUser());
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
