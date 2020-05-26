import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import { Icon } from 'semantic-ui-react';

import './connectMembers.scss';

const ConnectMembers = ({ changeField, email, password }) => {
  const handleClickSignin = () => {
    const signin = document.querySelector('.connectMembers-signin');
    const signup = document.querySelector('.connectMembers-signup');
    const arrowSignin = document.querySelector('#arrowSignin');
    const arrowSignup = document.querySelector('#arrowSignup');
    signin.classList.toggle('close');
    signup.classList.toggle('close');
    arrowSignin.classList.toggle('arrowClose');
    arrowSignup.classList.toggle('arrowClose');
  };
  const handleClickSignup = () => {
    const signin = document.querySelector('.connectMembers-signin');
    const signup = document.querySelector('.connectMembers-signup');
    const arrowSignin = document.querySelector('#arrowSignin');
    const arrowSignup = document.querySelector('#arrowSignup');
    signin.classList.toggle('close');
    signup.classList.toggle('close');
    arrowSignin.classList.toggle('arrowClose');
    arrowSignup.classList.toggle('arrowClose');
  };
  return (
    <div className="connectMembers">
      <h1 className="connectMembers-title" onClick={handleClickSignin}><span><Icon id="arrowSignin" name="caret down" className="" /></span>Se connecter à votre espace</h1>
      <form className="connectMembers-signin">
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
      </form>
      <h1 className="connectMembers-title" onClick={handleClickSignup}><span><Icon id="arrowSignup" className="arrowClose" name="caret down" /></span>Créer votre espace membre</h1>
      <form className="connectMembers-signup close">
        <Field
          name="gfdg"
          styles="field-input"
          placeholder="Votre adresse Email"
  /*      onChange={changeField}
          value={email} */
        />
        <Field
          name="gfdgdf"
          type="password"
          styles="field-input"
          placeholder="Votre mot de passe"
  /*      onChange={changeField}
          value={email} */
        />
        <button type="submit" className="adminConnect-submit">Se connecter</button>
        <a href="#" className="adminConnect-forgot">Mot de passe oublié</a>
      </form>
    </div>
  );
};

ConnectMembers.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default ConnectMembers;
