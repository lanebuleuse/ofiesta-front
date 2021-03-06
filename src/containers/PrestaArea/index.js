import { connect } from 'react-redux';

import PrestaArea from 'src/components/PrestaArea';

import { fetchProInformation } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.user.phone,
  address: state.user.address,
  postalCode: state.user.postalCode,
  city: state.user.city,
  email: state.user.email,
  services: state.user.serviceList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProInformation: () => {
    dispatch(fetchProInformation());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrestaArea);
