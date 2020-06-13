import { connect } from 'react-redux';

import Search from 'src/components/Search';

import {
  changeField,
  addDepartement,
  removeDepartment,
  listOfServiceToSearch,
  handleSearch,
  cleanDataToSearch,
} from 'src/actions/search';
import { resetActualPage } from 'src/actions/services';


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

  cleanDataToSearch: () => {
    dispatch(cleanDataToSearch());
  },

  resetActualPage: () => {
    dispatch(resetActualPage());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
