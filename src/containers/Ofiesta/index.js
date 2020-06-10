import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';
import { fetchDepartment, fetchNameService } from 'src/actions/search';
import { fetchMemberinformation, fetchProInformation } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loading: state.services.loading,
  actualPage: state.services.actualPage,
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

  checkUserConnected: () => {
    const authToken = localStorage.getItem('JWT_token');
    const roles = localStorage.getItem('ROLES');
    console.log(roles);
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
