import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { } from 'src/actions/user';

const mapStateToProps = (state) => ({
  title: state.service.title,
  address: state.service.address,
  postalCode: state.service.postalCode,
  city: state.service.city,
  department: state.service.department,
  price: state.service.price,
  note: state.service.note,
  minGuest: state.service.minGuest,
  maxGuest: state.service.maxGuest,
});

const mapDispatchToProps = (dispatch) => ({



});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
