/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import PropTypes from 'prop-types';

import './navBar.scss';

const NavBar = ({ isLogged }) => (
  <header>
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
        &#9776;
      </label>
      <a href="/" className="logo">OFIESTA</a>
      <input type="checkbox" id="chkToggle" />
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="/" className="nav-links">Accueil</a>
        </li>
        <li>
          <a href="#" className="nav-links">Products</a>
        </li>
        <li>
          <a href="#" className="nav-links">Contact Us</a>
        </li>
        {(!isLogged) && (
          <>
            <li>
              <a href="/se-connecter" className="nav-links">Se connecter</a>
            </li>
            <li>
              <a href="/inscription" className="nav-links">S'inscrire</a>
            </li>
          </>
        )}
        {(isLogged) && (
          <>
            <li>
              <a className="nav-links">Mon compte</a>
            </li>
            <li>
              <a className="nav-links">Se déconnecter</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
);

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default NavBar;
