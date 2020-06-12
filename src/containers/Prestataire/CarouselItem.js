import { connect } from 'react-redux';

import CarouselItem from 'src/components/Prestataire/CarouselItem';


const mapStateToProps = (state) => ({
  currentService: state.services.currentService,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarouselItem);
