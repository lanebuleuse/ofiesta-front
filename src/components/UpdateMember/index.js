import React, { useEffect } from 'react';

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
}) => {
  useEffect(() => {
    fetchMemberinformation(localStorage.getItem('USER_ID'), localStorage.getItem('JWT_token'));
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
      <div className="memberArea-mesinfos">
        <h2 className="memberArea-subTitle">Modifier mes infos</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="lastname">Nom :
            <input
              onChange={handleChange}
              className="inputUpdateMember"
              type="text"
              name="lastname"
              value={lastname}
            />
          </label>
          <label htmlFor="firstname">Prénom :
            <input
              onChange={handleChange}
              className="inputUpdateMember"
              type="text"
              name="firstname"
              value={firstname}
            />
          </label>
          <label htmlFor="address">Adresse :
            <input
              onChange={handleChange}
              className="update__form--input"
              type="text"
              name="address"
              value={address}
            />
          </label>
          <label htmlFor="postalCode">Code postal :
            <input
              onChange={handleChange}
              className="inputUpdateMember"
              type="text"
              name="postalCode"
              value={postalCode}
            />
          </label>
          <label htmlFor="city">Ville :
            <input
              onChange={handleChange}
              className="inputUpdateMember"
              type="text"
              name="city"
              value={city}
            />
          </label>
          <label htmlFor="phone">Téléphone :
            <input
              onChange={handleChange}
              className="inputUpdateMember"
              type="text"
              name="phone"
              value={phone}
            />
          </label>
          <label htmlFor="email">Email :
            <input
              onChange={handleChange}
              className="inputUpdateMember"
              type="text"
              name="email"
              value={email}
            />
          </label>
          <button className="buttonUpdateMember" type="submit">Annuler</button>
          <button className="buttonUpdateMember" type="submit">Valider</button>
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
};

export default UpdateMember;
