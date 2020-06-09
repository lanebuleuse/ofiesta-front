import { connect } from 'react-redux';

import PrestaArea from 'src/components/PrestaArea';

import { fetchProInformation } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // Retrieve the state on administration
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  phone: state.user.phone,
  adress: state.user.adress,
  cp: state.user.cp,
  city: state.user.city,
  email: state.user.email,
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
