import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './newPresta.scss';

const NewMember = ({
  firstname,
  lastname,
  company,
  siret,
  address,
  postalCode,
  city,
  email,
  phone,
  password,
  passwordbis,
  changeField,
  createPresta,
}) => {
  const handlecreatePresta = (evt) => {
    evt.preventDefault();
    createPresta();
  };

  return (
    <div className="newPresta">
      <h1 className="newPresta-title">Créer votre espace Pro</h1>
      <form className="newPresta-form" onSubmit={handlecreatePresta}>
        <Field
          name="lastname"
          styles="field-input"
          placeholder="Nom"
          onChange={changeField}
          value={lastname}
        />
        <Field
          name="firstname"
          styles=" field-input"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
        />
        <Field
          name="company"
          styles=" field-input"
          placeholder="Nom de votre société"
          onChange={changeField}
          value={company}
        />
        <Field
          name="siret"
          styles=" field-input"
          placeholder="SIREN / SIRET"
          onChange={changeField}
          value={siret}
        />
        <Field
          name="address"
          styles=" field-input"
          placeholder="N° et nom de rue"
          onChange={changeField}
          value={address}
        />
        <Field
          name="postalCode"
          styles=" field-input"
          placeholder="Code postal"
          onChange={changeField}
          value={postalCode}
        />
        <Field
          name="city"
          styles=" field-input"
          placeholder="Ville"
          onChange={changeField}
          value={city}
        />
        <Field
          name="phone"
          styles="field-input"
          type="phone"
          placeholder="Téléphone"
          onChange={changeField}
          value={phone}
        />
        <Field
          name="email"
          styles="field-input"
          placeholder="Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          styles="field-input"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <Field
          name="checkpassword"
          type="password"
          styles="field-input"
          placeholder="Vérification du mot de passe"
          onChange={changeField}
          value={passwordbis}
        />
        <button type="submit" className="adminConnect-submit">M'inscrire</button>
        <p className="connectMembers-linkAccount"><Link to="/mon-compte-pro/se-connecter">Vous avez déjà un compte</Link></p>
      </form>
    </div>
  );
};

NewMember.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  siret: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordbis: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  createPresta: PropTypes.func.isRequired,
};

export default NewMember;
