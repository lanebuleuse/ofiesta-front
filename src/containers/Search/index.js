import { connect } from 'react-redux';

import Search from 'src/components/Search';

import {
  changeField,
  addDepartement,
  search,
  removeDepartment,
  addServiceToSearch,
  removeServiceToSearch,
} from 'src/actions/search';

const mapStateToProps = (state) => ({
  serviceListName: state.search.serviceListName,
  departmentName: state.search.departmentName,
  departmentList: state.search.departmentList,
  departmentCode: state.search.departmentCode,
  serviceToSearch: state.search.serviceToSearch,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleSearch: () => {
    dispatch(search());
  },

  addServiceToSearch: (service) => {
    dispatch(addServiceToSearch(service));
  },

  removeServiceToSearch: (listService) => {
    dispatch(removeServiceToSearch(listService));
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
