import { connect } from 'react-redux';

import Ofiesta from 'src/components/Ofiesta';

import { fetchServices } from 'src/actions/services';
import { fetchDepartment, fetchNameService } from 'src/actions/search';
import { fetchMemberinformation } from 'src/actions/user';

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
    if (authToken) {
      dispatch(fetchMemberinformation());
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ofiesta);
