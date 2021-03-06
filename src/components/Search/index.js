import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
/* import { Form, Modal, Button } from 'react-bootstrap'; */

import {
  Form,
  Modal,
  Button,
  Icon,
  Dropdown,
  Input,
} from 'semantic-ui-react';

import './search.scss';

const Search = ({
  handleSearch,
  departmentName,
  departmentCodeToSearch,
  departmentList,
  addDepartement,
  removeDepartment,
  serviceListName,
  listOfServiceToSearch,
  cleanDataToSearch,
  resetActualPage,
  deleteInputValue,
  searchButton,
  noSearch,
}) => {
  useEffect(() => {
    cleanDataToSearch();
  }, []);

  const [modalOpen, setmodalOpen] = useState(false);
  const handleClose = () => setmodalOpen(false);
  const handleOpen = () => setmodalOpen(true);

  const options = [];

  serviceListName.map((currentService) => options.push({
    key: currentService.name,
    id: currentService.id,
    text: currentService.name,
    value: currentService.id,
  }));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  const handleChangeDepartment = (evt) => {
    const targetStatus = evt.target.checked;
    if (targetStatus) {
      resetActualPage();
      addDepartement(evt.target.value, evt.target.id);
    }
    else {
      let depCode = '';
      let depName = '';
      depName = departmentName.filter((dep) => (
        dep !== evt.target.id
      ));
      depCode = departmentCodeToSearch.filter((dep) => (
        dep !== evt.target.value
      ));
      resetActualPage();
      removeDepartment(depCode, depName);
    }
  };

  const handleChangeService = (evt, data) => {
    listOfServiceToSearch(data.value);
    resetActualPage();
  };

  const handleDelete = () => {
    const inputDep = document.querySelector('#inputDep');
    inputDep.value = '';
    deleteInputValue();
  };

  if (!noSearch) {
    return (
      <div className="search">
        <div className="search--content">
          <h4 className="search--subtitle">Organisez votre fête en quelques clics</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="search">
      <div className="search--content">
        <h4 className="search--subtitle">Organisez votre fête</h4>
        <h4 className="search--subtitle">en quelques clics</h4>
        <Form className="search--form" onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Dropdown
              className="search--form-field"
              placeholder="Que cherchez vous ?"
              fluid
              multiple
              selection
              options={options}
              onChange={handleChangeService}
            />
          </Form.Group>
          <Modal
            trigger={(
              <Input
                id="inputDep"
                label={<a onClick={handleDelete}><Icon name="close" /></a>}
                labelPosition="right"
                className="search--form-field--dep"
                onClick={handleOpen}
                placeholder="Où ça ?"
                value={departmentName}
                readOnly
              />
              )}
            open={modalOpen}
            onClose={handleClose}
            size="small"
            className="search--modal"
          >
            <Modal.Header>
              <Icon disabled name="browser" />Choississez vos lieux de recherche
              <span>
                <Icon link name="close" onClick={handleClose} />
              </span>
            </Modal.Header>
            <Modal.Content scrolling>
              {departmentList.map((currentDepartment) => (
                <div className="department" key={currentDepartment.code}>
                  {(departmentCodeToSearch.includes(currentDepartment.code)) && (
                    <Form.Field
                      label={currentDepartment.nom}
                      id={currentDepartment.nom}
                      control="input"
                      type="checkbox"
                      name="htmlRadios"
                      value={currentDepartment.code}
                      onChange={handleChangeDepartment}
                      checked
                    />
                  )}
                  {(!departmentCodeToSearch.includes(currentDepartment.code)) && (
                    <Form.Field
                      label={currentDepartment.nom}
                      id={currentDepartment.nom}
                      control="input"
                      type="checkbox"
                      name="htmlRadios"
                      value={currentDepartment.code}
                      onChange={handleChangeDepartment}
                    />
                  )}
                </div>
              ))}
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={handleClose}>
                <Icon name="checkmark" /> Valider
              </Button>
            </Modal.Actions>
          </Modal>
        </Form>
        {searchButton !== false && <Link className="search__form--button" to="/">Lancer une nouvelle recherche</Link>}
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  departmentCodeToSearch: PropTypes.array.isRequired,
  departmentName: PropTypes.array.isRequired,
  departmentList: PropTypes.array.isRequired,
  addDepartement: PropTypes.func.isRequired,
  removeDepartment: PropTypes.func.isRequired,
  serviceListName: PropTypes.array.isRequired,
  listOfServiceToSearch: PropTypes.func.isRequired,
  cleanDataToSearch: PropTypes.func.isRequired,
  resetActualPage: PropTypes.func.isRequired,
  deleteInputValue: PropTypes.func.isRequired,
  noSearch: PropTypes.bool,
};

Search.defaultProps = {
  noSearch: true,
};

export default Search;
