import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import './updateMemberPro.scss';

const UpdatePresta = () => (
  <div className="memberAreaPro">
    <div className="memberAreaPro-mesinfos">
      <h2 className="memberAreaPro-subTitle">Gerer ma prestation</h2>
      <form className="updateMemberProForm">
        <label
          htmlFor="title"
          className="updateMemberProForm--label"
        >
          Titre de la prestation :
          <input
            className="updateMemberProForm--input"
            type="text"
            name="title"
          />
        </label>
        <label
          htmlFor="city"
          className="updateMemberProForm--label"
        >
          Ville :
          <input
            className="updateMemberProForm--input"
            type="text"
            name="city"
          />
        </label>
        <label
          htmlFor="department"
          className="updateMemberProForm--label"
        >
          Numéro departement :
          <input
            className="updateMemberProForm--input"
            type="number"
            name="department"
          />
        </label>
        <label
          htmlFor="prix"
          className="updateMemberProForm--label"
        >
          Prix (à partir de) :
          <input
            className="updateMemberProForm--input"
            type="number"
            name="prix"
          />
        </label>
        <label
          htmlFor="invitMin"
          className="updateMemberProForm--label"
        >
          Nombre invité minimum :
          <input
            className="updateMemberProForm--input"
            type="number"
            name="invitMin"
          />
        </label>
        <label
          htmlFor="invitMax"
          className="updateMemberProForm--label"
        >
          Nombre invité maximum :
          <input
            className="updateMemberProForm--input"
            type="number"
            name="invitMax"
          />
        </label>
        <label
          htmlFor="description"
          className="updateMemberProForm--label textarea"
        >
          Description de la prestation :
          <textarea
            className="updateMemberProForm--input textareaInput"
            type="textarea"
            name="description"
            rows="5"
          />
        </label>
        <button className="updateMemberProForm--button updateMemberProForm--button-cancel" type="submit">Annuler</button>
        <button className="updateMemberProForm--button" type="submit">Valider</button>
      </form>
    </div>
  </div>
);


UpdatePresta.propTypes = {
};

export default UpdatePresta;
