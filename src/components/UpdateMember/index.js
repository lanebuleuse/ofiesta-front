import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './updateMember.scss';

const UpdateMember = ({
  firstname,
  lastname,
  phone,
  address,
  postalCode,
  city,
  email,
  fetchMemberinformation,
  changeField,
  handleUpdateMember,
  updateInfo,
}) => {
  useEffect(() => {
    fetchMemberinformation();
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateMember();
  };

  const handleChange = (evt) => {
    // console.log(evt.currentTarget.name);
    changeField(evt.target.value, evt.currentTarget.name);
  };
  return (
    <div className="memberArea">
      {updateInfo && (
        <div>Vos modifications ont été prises en compte</div>
      )}
      <div className="memberArea-mesinfos">
        <h2 className="memberArea-subTitle">Modifier mes infos</h2>
        <form className="updateMemberForm" onSubmit={handleSubmit}>
          <label
            htmlFor="lastname"
            className="updateMemberForm--label"
          >
            Nom :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="lastname"
              value={lastname}
            />
          </label>
          <label
            htmlFor="firstname"
            className="updateMemberForm--label"
          >
            Prénom :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="firstname"
              value={firstname}
            />
          </label>
          <label
            htmlFor="address"
            className="updateMemberForm--label updateMemberForm--label-address"
          >
            Adresse :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="address"
              value={address}
            />
          </label>
          <label
            htmlFor="postalCode"
            className="updateMemberForm--label"
          >
            Code postal :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="postalCode"
              value={postalCode}
            />
          </label>
          <label
            htmlFor="city"
            className="updateMemberForm--label"
          >
            Ville :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="city"
              value={city}
            />
          </label>
          <label
            htmlFor="phone"
            className="updateMemberForm--label"
          >
            Téléphone :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="phone"
              value={phone}
            />
          </label>
          <label
            htmlFor="email"
            className="updateMemberForm--label"
          >
            Email :
            <input
              onChange={handleChange}
              className="updateMemberForm--input"
              type="text"
              name="email"
              value={email}
            />
          </label>
          <Link to="/mon-compte" className="updateMemberForm--button updateMemberForm--button-cancel" type="submit">Annuler</Link>
          <button className="updateMemberForm--button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

UpdateMember.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchMemberinformation: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateMember: PropTypes.func.isRequired,
  updateInfo: PropTypes.bool.isRequired,
};

export default UpdateMember;
