import React, { useEffect } from 'react';

import { Redirect, Link } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import Field from 'src/components/Field';

import './connectMembers.scss';

const ConnectMembers = ({
  changeField,
  email,
  password,
  isLogged,
  handleLogin,
  accountCreated,
  resetAuthForm,
  removeAccountMessage,
  authError,
}) => {

  useEffect(() => {
    resetAuthForm();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const handleCloseMessage = () => {
    removeAccountMessage();
  };

  if (removeAccountMessage) {
    setTimeout(() => {
      removeAccountMessage();
    }, 5000);
  }

  return (
    <>
      {(isLogged) && <Redirect to="/mon-compte" />}
      {(authError) && (
        <div>
          <p>
            Nous n'avons pas pu vous identifier
          </p>
          <p>
            Veuillez recommmancer
          </p>
        </div>
      )}
      <div className="connectMembers">
        {(accountCreated) && (
          <div className="connectMembers--accountCreated">
            <div className="connectMembers--accountCreated--content">
              <Icon link name="close" onClick={handleCloseMessage} />Votre compte à bien été créé
            </div>
          </div>
        )}
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
          <p className="connectMembers-linkAccount"><Link to="/inscription">Vous n'avez pas encore de compte</Link></p>
        </form>
      </div>
    </>
  );
};

ConnectMembers.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  accountCreated: PropTypes.bool.isRequired,
  resetAuthForm: PropTypes.func.isRequired,
  removeAccountMessage: PropTypes.func.isRequired,
  authError: PropTypes.bool.isRequired,
};

ConnectMembers.defaultProps = {
  password: '',
};

export default ConnectMembers;
