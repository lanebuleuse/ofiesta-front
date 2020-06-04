import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import Field from 'src/components/Field';

import './connectPresta.scss';

const ConnectPresta = ({
  changeField,
  email,
  password,
  isLogged,
  handleLogin,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  if (isLogged) return <Redirect to="/mon-compte" />;
  return (
    <div className="connectMembers">
      <form className="connectMembers-form" onSubmit={handleSubmit}>
        <h1 className="connectMembers-title">Se connecter à votre espace pro</h1>
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
        <p className="connectMembers-linkAccount"><Link to="/mon-compte-pro/inscription">Vous n'avez pas encore de compte pro</Link></p>
      </form>
      {/* {isLogged && (<Redirect to="/" />)} */}
    </div>
  );
};

ConnectPresta.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

ConnectPresta.defaultProps = {
  password: '',
};

export default ConnectPresta;
