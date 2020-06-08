/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Form } from 'semantic-ui-react';
import surligne from 'src/utils/surligne';
import {
  verifField,
  verifEmail,
  verifPostalCode,
  verifPassword,
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

/*   const lastname = false; */

  let arrayError = [];

  const handleChange = (evt) => {
    const { name } = evt.target;
    onChange(evt.target.value, name);
  };

  const handleBlurField = (evt) => {
    if (evt.currentTarget.value.length < 2) {
      surligne(evt.currentTarget, true);
      return false;
    }
    surligne(evt.currentTarget, false);
    return true;
  };

  const handleBlurPostalCode = (evt) => {
    const codeInt = parseInt(evt.currentTarget.value);

    if ((evt.currentTarget.value.length == 5) && Number.isInteger(codeInt)) {
      surligne(evt.currentTarget, false);
      return true;
    }
    surligne(evt.currentTarget, true);
    return false;
    
  };

  const handleBlurEmail = (evt) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(evt.currentTarget.value)) {
      surligne(evt.currentTarget, true);
      return false;
    }
    surligne(evt.currentTarget, false);
    return true;
  };

  const verifPassword = (password, passwordbis) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  /* 
    console.log(password.value);
    console.log(passwordbis.value); */
    if (regex.test(password.value) && (password.value === passwordbis.value)) {
      console.log('Pass Ok');
      surligne(evt.currentTarget, false);
      return true;
      
    }
    console.log('Pass Ko');
    surligne(evt.currentTarget, true);
    return false;
    
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

    console.log(lastnameOk);
    console.log(firstnameOk);
    console.log(emailOk);
    console.log(addressOk);
    console.log(postalCodeOk);
    console.log(cityOk);
    console.log(passwordOk);

    if (lastnameOk && firstnameOk && emailOk) {
      console.log('ok');
    }
    else {
      alert("Veuillez remplir correctement tous les champs");
      return false;
    }

    /* createUser(); */
  };

  return (
    <>
      {accountCreated && (
        <>
          <div>Votre compte à bien été créé</div>
          <Link to="/se-connecter">Se connecter</Link>
        </>
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
                onBlur={handleBlurField}
              />
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
                onBlur={handleBlurField}
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
