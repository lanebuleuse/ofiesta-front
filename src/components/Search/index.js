import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* import { Form, Modal, Button } from 'react-bootstrap'; */

import {
  Form,
  Select,
  Modal,
  Button,
  Icon,
  Dropdown,
} from 'semantic-ui-react';

import './search.scss';

const Search = ({
  handleSearch,
  departmentName,
  departmentCode,
  departmentList,
  addDepartement,
  removeDepartment,
  serviceListName,
}) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const handleClose = () => setmodalOpen(false);
  const handleOpen = () => setmodalOpen(true);

  const options = [];

  serviceListName.map((currentService) => options.push({
    key: currentService.name,
    id: currentService.name,
    text: currentService.name,
    value: currentService.name,
  }));

  console.log(options);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  const handleChangeDepartment = (evt) => {
    const targetStatus = evt.target.checked;
    if (targetStatus) {
      addDepartement(evt.target.value, evt.target.id);
    }
    else {
      let depCode = '';
      let depName = '';
      depName = departmentName.filter((dep) => (
        dep !== evt.target.id
      ));
      depCode = departmentCode.filter((dep) => (
        dep !== evt.target.value
      ));
      removeDepartment(depCode, depName);
    }
  };

  const handleChangeService = (evt) => {
    console.log(evt.currentTarget.id);
  };

  return (
    <div className="search">
      <div className="search--content">
        <h4 className="search--subtitle">Pour une fête sans prise de tête</h4>
        <Form className="search--form" onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Dropdown placeholder='Skills' fluid multiple selection options={options} onChange={handleChangeService} />
          </Form.Group>
          <Modal
            trigger={<input onClick={handleOpen} placeholder="Où ça ?" value={departmentName} readOnly />}
            open={modalOpen}
            onClose={handleClose}
            size="small"
            className="search--modal"
            closeIcon
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
                  {(departmentCode.includes(currentDepartment.code)) && (
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
                  {(!departmentCode.includes(currentDepartment.code)) && (
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
          <Button type="submit" content="Chercher" className="search__form--button" />
        </Form>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  departmentCode: PropTypes.array.isRequired,
  departmentName: PropTypes.array.isRequired,
  departmentList: PropTypes.array.isRequired,
  addDepartement: PropTypes.func.isRequired,
  removeDepartment: PropTypes.func.isRequired,
  serviceListName: PropTypes.array.isRequired,
};

export default Search;
