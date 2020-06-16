/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logo-ofiesta2.png';

import PropTypes from 'prop-types';

import './navBar.scss';

const NavBar = ({ isLogged, roles, fetchServices }) => (
  <header>
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
        &#9776;
      </label>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="logo Ofiesta" />
      </Link>
      <input type="checkbox" id="chkToggle" />
      <ul className="main-nav" id="js-menu">
        <li>
          <Link
            to="/"
            /* onClick={handleClick} */
            className="nav-links"
          >Accueil
          </Link>
        </li>
        {(!isLogged) && (
          <>
            <li>
              <Link to="/se-connecter" className="nav-links">Se connecter</Link>
            </li>
            <li>
              <Link to="/inscription" className="nav-links">S'inscrire</Link>
            </li>
          </>
        )}
        {(isLogged) && (
          <>
            {roles.includes('ROLE_MEMBER') && (
              <li>
                <Link to="/mon-compte" className="nav-links">Mon compte</Link>
              </li>
            )}
            {roles.includes('ROLE_PROVIDER') && (
              <li>
                <Link to="/mon-compte-pro" className="nav-links">Mon compte pro</Link>
              </li>
            )}
            <li>
              <Link to="/deconnection" className="nav-links">Se déconnecter</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
);


NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
  fetchServices: PropTypes.func.isRequired,
};

export default NavBar;
