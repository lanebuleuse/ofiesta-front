import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import Field from 'src/components/Field';

import './connectMembers.scss';

const ConnectMembers = ({
  changeField,
  email,
  password,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div className="connectMembers">
      <form className="connectMembers-form" onSubmit={handleSubmit}>
        <h1 className="connectMembers-title">Se connecter à votre espace</h1>
        <Field
          name="email"
          styles="field-input"
          placeholder="Votre adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          styles="field-input"
          placeholder="Votre mot de passe"
          onChange={changeField}
          value={password}
        />
        <button type="submit" className="adminConnect-submit">Se connecter</button>
        <p className="connectMembers-linkAccount"><a href="/inscription">Vous n'avez pas encore de compte</a></p>
      </form>
      {/* {isLogged && (<Redirect to="/" />)} */}
    </div>
  );
};

ConnectMembers.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.string.isRequired,
};

export default ConnectMembers;
