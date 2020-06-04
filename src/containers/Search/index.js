import { connect } from 'react-redux';

import Search from 'src/components/Search';

import {
  changeField,
  addDepartement,
  search,
  removeDepartment,
} from 'src/actions/search';

const mapStateToProps = (state) => ({
  service: state.search.service,
  departmentName: state.search.departmentName,
  departmentList: state.search.departmentList,
  departmentCode: state.search.departmentCode,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleSearch: () => {
    dispatch(search());
  },
  addDepartement: (department, departmentName) => {
    dispatch(addDepartement(department, departmentName));
  },

  removeDepartment: (depCode, depName) => {
    dispatch(removeDepartment(depCode, depName ));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
