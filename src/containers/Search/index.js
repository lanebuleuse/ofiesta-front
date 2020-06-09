import { connect } from 'react-redux';

import Search from 'src/components/Search';

import {
  changeField,
  addDepartement,
  removeDepartment,
  listOfServiceToSearch,
  handleSearch,
} from 'src/actions/search';

const mapStateToProps = (state) => ({
  serviceListName: state.search.serviceListName,
  departmentName: state.search.departmentName,
  departmentList: state.search.departmentList,
  departmentCodeToSearch: state.search.departmentCodeToSearch,
  serviceToSearch: state.search.serviceToSearch,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleSearch: () => {
    dispatch(handleSearch());
  },

  listOfServiceToSearch: (data) => {
    dispatch(listOfServiceToSearch(data));
  },

  addDepartement: (department, departmentName) => {
    dispatch(addDepartement(department, departmentName));
  },

  removeDepartment: (depCode, depName) => {
    dispatch(removeDepartment(depCode, depName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
