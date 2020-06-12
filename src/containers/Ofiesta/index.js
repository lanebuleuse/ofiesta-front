import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';
import {
  fetchDepartment,
  fetchNameService,
  handleSearch,
  cleanDataToSearch,
} from 'src/actions/search';
import { fetchMemberinformation, fetchProInformation } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loading: state.services.loading,
  actualPage: state.services.actualPage,
  serviceIdToSearch: state.search.serviceIdToSearch,
  departmentCodeToSearch: state.search.departmentCodeToSearch,
});

const mapDispatchToProps = (dispatch) => ({

  fetchServices: () => {
    dispatch(fetchServices());
  },

  fetchDepartment: () => {
    dispatch(fetchDepartment());
  },

  fetchNameService: () => {
    dispatch(fetchNameService());
  },

  handleSearch: () => {
    dispatch(handleSearch());
  },

  cleanDataToSearch: () => {
    dispatch(cleanDataToSearch());
  },

  checkUserConnected: () => {
    const authToken = localStorage.getItem('JWT_token');
    const roles = localStorage.getItem('ROLES');
    if (authToken && roles.includes('ROLE_MEMBER')) {
      dispatch(fetchMemberinformation());
    }
    if (authToken && roles.includes('ROLE_PROVIDER')) {
      dispatch(fetchProInformation());
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
