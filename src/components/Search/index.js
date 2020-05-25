import React from 'react';

import './search.scss';

const Search = () => (
  <div className="search">
    <div className="search--content">
      <h1 className="search--title">OFIESTA</h1>
      <h4 className="search--subtitle">Pour une fête sans prise de tête</h4>
      <form className="search__form">
        <input
          className="search__form--input"
          type="search"
          placeholder="Quel prestataire?"
        />
        <input
          className="search__form--input"
          type="search"
          placeholder="Département rechercher"
        />
        <button className="search__form--button" type="submit">Rechercher</button>
      </form>
    </div>
  </div>
);

export default Search;
