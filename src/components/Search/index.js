import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Button } from 'react-bootstrap';

import './search.scss';

const Search = ({
  handleSearch,
  service,
  departmentName,
  departmentCode,
  departmentList,
  addDepartement,
  removeDepartment,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  const handleChange = () => {

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

  return (
    <div className="search">
      <div className="search--content">
        <h1 className="search--title">OFIESTA</h1>
        <h4 className="search--subtitle">Pour une fête sans prise de tête</h4>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__form--input"
            type="search"
            placeholder="Quel prestataire?"
            name="service"
            onChange={handleChange}
            value={service}
          />
          <input
            className="search__form--input"
            type="search"
            placeholder="Département rechercher"
            id="department"
            name="department"
            onClick={handleShow}
            value={departmentName}
            readOnly=" readonly"
          />
          <button className="search__form--button" type="submit">Rechercher</button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Séléctionner les départements</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal_departments">
              {departmentList.map((currentDepartment) => (
                <div className="department" key={currentDepartment.code}>
                  <Form.Group controlId={currentDepartment.nom}>
                    {(departmentCode.includes(currentDepartment.code)) && (
                      <Form.Check
                        type="checkbox"
                        value={currentDepartment.code}
                        label={currentDepartment.nom}
                        onChange={handleChangeDepartment}
                        checked
                      />
                    )}
                    {(!departmentCode.includes(currentDepartment.code)) && (
                      <Form.Check
                        type="checkbox"
                        value={currentDepartment.code}
                        label={currentDepartment.nom}
                        onChange={handleChangeDepartment}
                      />
                    )}
                  </Form.Group>
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Annuler
              </Button>
              <Button variant="primary">Valider</Button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  service: PropTypes.string.isRequired,
  departmentCode: PropTypes.array.isRequired,
  departmentName: PropTypes.array.isRequired,
  departmentList: PropTypes.array.isRequired,
  addDepartement: PropTypes.func.isRequired,
  removeDepartment: PropTypes.func.isRequired,
};

export default Search;
