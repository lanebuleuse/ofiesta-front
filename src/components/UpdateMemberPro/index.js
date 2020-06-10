import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import './updateMemberPro.scss';

const UpdateMemberPro = ({
  firstname,
  lastname,
  phone,
  address,
  postalCode,
  city,
  email,
  fetchMemberinformation,
  changeField,
  handleUpdateMemberPro,
}) => {
  useEffect(() => {
    fetchMemberinformation();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateMemberPro();
  };

  const handleChange = (evt) => {
    // console.log(evt.currentTarget.name);
    changeField(evt.target.value, evt.currentTarget.name);
  };
  return (
    <div className="memberAreaPro">
      <div className="memberAreaPro-mesinfos">
        <h2 className="memberAreaPro-subTitle">Modifier mes infos</h2>
        <form className="updateMemberProForm" onSubmit={handleSubmit}>
          <label
            htmlFor="lastname"
            className="updateMemberProForm--label"
          >
            Nom :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="lastname"
              value={lastname}
            />
          </label>
          <label
            htmlFor="firstname"
            className="updateMemberProForm--label"
          >
            Prénom :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="firstname"
              value={firstname}
            />
          </label>
          <label
            htmlFor="address"
            className="updateMemberProForm--label updateMemberForm--label-address"
          >
            Adresse :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="address"
              value={address}
            />
          </label>
          <label
            htmlFor="postalCode"
            className="updateMemberProForm--label"
          >
            Code postal :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="postalCode"
              value={postalCode}
            />
          </label>
          <label
            htmlFor="city"
            className="updateMemberProForm--label"
          >
            Ville :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="city"
              value={city}
            />
          </label>
          <label
            htmlFor="phone"
            className="updateMemberProForm--label"
          >
            Téléphone :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="phone"
              value={phone}
            />
          </label>
          <label
            htmlFor="email"
            className="updateMemberProForm--label"
          >
            Email :
            <input
              onChange={handleChange}
              className="updateMemberProForm--input"
              type="text"
              name="email"
              value={email}
            />
          </label>
          <button className="updateMemberProForm--button updateMemberProForm--button-cancel" type="submit">Annuler</button>
          <button className="updateMemberProForm--button" type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

UpdateMemberPro.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchMemberinformation: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateMemberPro: PropTypes.func.isRequired,
};

export default UpdateMemberPro;
