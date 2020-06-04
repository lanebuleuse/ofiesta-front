import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './search.scss';

const Search = ({
  handleSearch,
  changeField,
  service,
  department,
  departmentList,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  const handleChange = (evt) => {
    // console.log(evt.currentTarget.name);
    changeField(evt.target.value, evt.currentTarget.name);
  };

  const handleBlur = (evt) => {
    console.log('je passe ici');
    const currentDiv = evt.target;
    currentDiv.classList.remove('visible');
  };

  const handleClickDepartment = (evt) => {
    const departmentInput = evt.target.getBoundingClientRect();
    const departmentTop = departmentInput.y;
    const departmentLeft = departmentInput.x;
    const departmentSize = departmentInput.width;
    console.log(evt.target.getBoundingClientRect());
    console.log(departmentTop);
    console.log(departmentLeft);
    const divListDepartment = document.querySelector('.searchDepartment_list');
    console.log(divListDepartment);
    divListDepartment.classList.add('visible');
    divListDepartment.style.top = `${departmentTop + 28}px`;
    divListDepartment.style.left = `${departmentLeft}px`;
    divListDepartment.style.minWidth = `${departmentSize}px`;
    divListDepartment.style.maxWidth = `${departmentSize + 100}px`;
    divListDepartment.focus();
  };
  console.log(departmentList);

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
          <div className="searchDepartment">
            <input
              className="search__form--input"
              type="search"
              placeholder="Département rechercher"
              name="department"
              onChange={handleChange}
              onClick={handleClickDepartment}
              value={department}
            />
            <div className="searchDepartment_list" onBlur={handleBlur}>
              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <p>test</p>
              <p>test</p>
              <p>test</p>
            </div>
          </div>
          <button className="search__form--button" type="submit">Rechercher</button>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  service: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  departmentList: PropTypes.array.isRequired,
};

export default Search;
