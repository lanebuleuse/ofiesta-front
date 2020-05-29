import React from 'react';

import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './newMember.scss';

const NewMember = ({
  firstname,
  lastname,
  email,
  phone,
  password,
  passwordbis,
  changeField,
  createUser,
}) => {
  const handleCreateUser = (evt) => {
    evt.preventDefault();
    createUser();
  };

  return (
    <div className="newMembers">
      <h1 className="newMembers-title">Créer votre espace Membre</h1>
      <form className="newMembers-form" onSubmit={handleCreateUser}>
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
          name="email"
          styles="field-input"
          placeholder="Email"
          onChange={changeField}
          value={email}
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
        <p className="connectMembers-linkAccount"><a href="/se-connecter">Vous avez déjà un compte</a></p>
      </form>
    </div>
  );
};

NewMember.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordbis: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default NewMember;
