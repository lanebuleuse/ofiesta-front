import { connect } from 'react-redux';

import Search from 'src/components/Search';

import { changeField, search } from 'src/actions/search';

const mapStateToProps = (state) => ({
  service: state.search.service,
  department: state.search.department,
  departmentList: state.search.departmentList,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleSearch: () => {
    dispatch(search());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
