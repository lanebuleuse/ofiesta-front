import { connect } from 'react-redux';

import Disconnect from 'src/components/Disconnect';

import { disconnectUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  disconnectUser: () => {
    localStorage.clear();
    dispatch(disconnectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Disconnect);
