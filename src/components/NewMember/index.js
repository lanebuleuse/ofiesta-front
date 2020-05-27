import React from 'react';

import Field from 'src/components/Field';

import './newMember.scss';

const NewMember = () => (
  <div className="newMembers">
    <h1 className="newMembers-title">Créer votre espace Membre</h1>
    <form className="newMembers-form" onSubmit="">
      <Field
        name="lastname"
        styles="field-input field"
        placeholder="Nom"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="firstname"
        styles=" field-input"
        placeholder="Prénom"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="email"
        styles="field-input"
        placeholder="Email"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="phone"
        styles="field-input"
        placeholder="Téléphone"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="password"
        type="password"
        styles="field-input"
        placeholder="Mot de passe"
/*         onChange={changeField}
        value={password} */
      />
      <Field
        name="checkpassword"
        type="password"
        styles="field-input"
        placeholder="Vérification du mot de passe"
/*         onChange={changeField}
        value={password} */
      />
      <button type="submit" className="adminConnect-submit">M'inscrire</button>
      <p className="connectMembers-linkAccount"><a href="/se-connecter">Vous avez déjà un compte</a></p>
    </form>
  </div>
);

export default NewMember;
