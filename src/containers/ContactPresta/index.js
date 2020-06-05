import { connect } from 'react-redux';

import ContactPresta from 'src/components/ContactPresta';

import { } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactPresta);
