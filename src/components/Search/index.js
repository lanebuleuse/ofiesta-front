import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

const Search = ({
  handleSearch,
  changeField,
  service,
  department,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  const handleChange = (evt) => {
    // console.log(evt.currentTarget.name);
    changeField(evt.target.value, evt.currentTarget.name);
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
            name="department"
            onChange={handleChange}
            value={department}
          />
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
};

export default Search;
