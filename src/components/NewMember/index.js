/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Form, Label, Message } from 'semantic-ui-react';

import {
  verifField,
  verifEmail,
  verifPostalCode,
  verifPassword,
  handleBlurField,
  handleBlurPostalCode,
  handleBlurEmail,
  handleBlurPassword,
  handleBlurPasswordBis,
} from 'src/utils/verifForm';

import PropTypes from 'prop-types';

import './newMember.scss';

const NewMember = ({
  firstname,
  lastname,
  address,
  postalCode,
  city,
  email,
  phone,
  password,
  passwordbis,
  createUser,
  accountCreated,
  onChange,
  resetNewMember,
}) => {
  useEffect(() => {
    resetNewMember();
  }, []);

  const handleChange = (evt) => {
    const { name } = evt.target;
    onChange(evt.target.value, name);
  };

  const handleCreateUser = (evt) => {
    evt.preventDefault();

    const lastnameOk = verifField(document.querySelector('#lastname'));
    const firstnameOk = verifField(document.querySelector('#firstname'));
    const addressOk = verifField(document.querySelector('#address'));
    const postalCodeOk = verifPostalCode(document.querySelector('#postalCode'));
    const cityOk = verifField(document.querySelector('#city'));
    const emailOk = verifEmail(document.querySelector('#email'));
    const passwordOk = verifPassword(document.querySelector('#password'), document.querySelector('#passwordbis'));

    if (lastnameOk && firstnameOk && emailOk && addressOk && postalCodeOk && cityOk && passwordOk) {
      document.querySelector('#errorMessage').style.display = 'none';
      document.querySelector('#errorPassword').style.display = 'none';
      document.querySelector('#errorMail').style.display = 'none';
      createUser();
    }
    else {
      if (!passwordOk) {
        document.querySelector('#errorPassword').style.display = 'block';
      }
      else {
        document.querySelector('#errorPassword').style.display = 'none';
      }
      if (!emailOk) {
        document.querySelector('#errorMail').style.display = 'block';
      }
      else {
        document.querySelector('#errorMail').style.display = 'none';
      }
      document.querySelector('#errorMessage').style.display = 'block';
      return false;
    }
  };

  return (
    <>
      {accountCreated && (
        <div className="createSuccess">
          <h2 className="createSuccess--text">Votre compte à bien été créé</h2>
          <Link className="createSuccess--button" to="/se-connecter">Se connecter</Link>
        </div>
      )}
      {!accountCreated && (
        <div className="newMembers">
          <h1 className="newMembers-title">Créer votre espace Membre</h1>
          <Form className="newMembers-form" onSubmit={handleCreateUser}>
            <Form.Field required>
              <label>Votre nom</label>
              <input
                type="text"
                id="lastname"
                placeholder="Nom"
                className="field-input"
                name="lastname"
                onChange={handleChange}
                value={lastname}
                onBlur={handleBlurField}
              />
            </Form.Field>
            <Form.Field required>
              <label>Votre prénom</label>
              <input
                type="text"
                id="firstname"
                placeholder="Prénom"
                className="field-input"
                name="firstname"
                onChange={handleChange}
                value={firstname}
                onBlur={handleBlurField}
              />
            </Form.Field>
            <Form.Field>
              <label>Votre téléphone</label>
              <input
                type="text"
                id="phone"
                placeholder="Téléphone"
                className="field-input"
                name="phone"
                onChange={handleChange}
                value={phone}
                onBlur={handleBlurField}
              />
            </Form.Field>
            <Form.Field required>
              <label>Votre email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="field-input"
                name="email"
                onChange={handleChange}
                value={email}
                onBlur={handleBlurEmail}
              />
              <Label id="errorMail" basic color="red" pointing>
                8 caractères, minuscule, majuscule, chiffre et lettre ainsi qu'un caractère suivant !@#%&*
              </Label>
            </Form.Field>
            <Form.Field required>
              <label>Votre mot de passe</label>
              <input
                type="password"
                id="password"
                placeholder="Mot de passe"
                className="field-input"
                name="password"
                onChange={handleChange}
                value={password}
                onBlur={handleBlurPassword}
              />
              <Label id="errorPassword" basic color="red" pointing>
                8 caractères, minuscule, majuscule, chiffre et lettre ainsi qu'un caractère suivant !@#%&*
              </Label>
            </Form.Field>
            <Form.Field required>
              <label>Resaisir votre mot de passe</label>
              <input
                type="password"
                id="passwordbis"
                placeholder="Vérification de votre mot de passe"
                className="field-input"
                name="passwordbis"
                onChange={handleChange}
                value={passwordbis}
                onBlur={handleBlurPasswordBis}
              />
            </Form.Field>
            <Form.Field required>
              <label>Votre adresse</label>
              <input
                type="text"
                id="address"
                placeholder="Adresse"
                className="field-input"
                name="address"
                onChange={handleChange}
                value={address}
                onBlur={handleBlurField}
              />
            </Form.Field>
            <Form.Field required>
              <label>Votre code postal</label>
              <input
                type="text"
                id="postalCode"
                placeholder="Code postal"
                className="field-input"
                name="postalCode"
                onChange={handleChange}
                value={postalCode}
                onBlur={handleBlurPostalCode}
              />
            </Form.Field>
            <Form.Field required>
              <label>Votre ville</label>
              <input
                type="text"
                id="city"
                placeholder="Ville"
                className="field-input"
                name="city"
                onChange={handleChange}
                value={city}
                onBlur={handleBlurField}
              />
            </Form.Field>
            <button type="submit" className="adminConnect-submit">M'inscrire</button>
            <p className="connectMembers-linkAccount"><a href="/se-connecter">Vous avez déjà un compte</a></p>
          </Form>
          <Message negative hidden id="errorMessage">
            <Message.Header>Veuillez remplir les champs requis</Message.Header>
          </Message>
        </div>
      )}
    </>
  );
};

NewMember.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordbis: PropTypes.string.isRequired,
  resetNewMember: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  accountCreated: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NewMember;
