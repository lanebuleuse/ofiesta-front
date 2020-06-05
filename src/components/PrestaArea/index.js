import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import './prestaArea.scss';


const PrestaArea = ({
  firstname,
  lastname,
  phone,
  adress,
  city,
  cp,
  email,
  fetchMemberinformation,
}) => {
  useEffect(() => {
    fetchMemberinformation();
  }, []);
  console.log(firstname);
  return (
    <div className="infos">
      <div className="info-mesinfos">
        <h2 className="info-subTitle">Mes infos</h2>
        <a className="info-modifier">Modifier</a>
        <p className="info-detail"><i className="fa fa-user" aria-hidden="true" />{firstname} {lastname}</p>
        <p className="info-detail"><i className="fa fa-home" aria-hidden="true" /> {cp} , {adress} {cp} {city}</p>
        <p className="info-detail"><i className="fa fa-mobile" aria-hidden="true" />{phone}</p>
        <p className="info-detail"><i className="fa fa-envelope-o" aria-hidden="true" />{email}</p>
        <p className="info-detail"><i className="fa fa-key" aria-hidden="true" />Mot de passe</p>
        <p className="info-detail"><i className="fa fa-key" aria-hidden="true" />Verification mot de passe</p>
      </div>
    </div>
  );
};

PrestaArea.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchMemberinformation: PropTypes.func.isRequired,
  // roles: PropTypes.string.isRequired,
  // isLogged: PropTypes.bool.isRequired,
  // changeField: PropTypes.func.isRequired,
  // handleLogin: PropTypes.func.isRequired,
};


export default PrestaArea;
