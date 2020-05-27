import React from 'react';

import Field from 'src/components/Field';

import './newMembers.scss';

const NewMembers = () => (
  <div className="newMembers">
    <form className="newMembers-form" onSubmit="">
      <h1 className="newMembers-title">Créer votre espace Membre</h1>
      <Field
        name="name"
        styles="field-input"
        placeholder="Nom"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="name"
        styles="field-input"
        placeholder="Prénom"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="email"
        styles="field-input"
        placeholder="Votre adresse Email"
 /*        onChange={changeField}
        value={email} */
      />
      <Field
        name="password"
        type="password"
        styles="field-input"
        placeholder="Votre mot de passe"
/*         onChange={changeField}
        value={password} */
      />
      <button type="submit" className="adminConnect-submit">Se connecter</button>
      <p className="connectMembers-linkAccount"><a href="/inscription">Vous n'avez pas encore de compte</a></p>
    </form>
  </div>
);

export default NewMembers;
