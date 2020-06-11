import { connect } from 'react-redux';

import Card from 'src/components/Card';


const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  favorites: state.user.favorites,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
