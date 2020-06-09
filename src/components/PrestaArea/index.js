import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './prestaArea.scss';


const PrestaArea = ({
  firstname,
  lastname,
  phone,
  address,
  city,
  postalCode,
  email,
  fetchProInformation,
}) => {
  useEffect(() => {
    fetchProInformation();
  }, []);
  return (
    <div className="infos">
      <div className="info-mesinfos">
        <h2 className="info-subTitle">Mes infos</h2>
        <Link to="/mon-compte-pro/modifier" className="prestaArea-modifier">Modifier</Link>
        <p className="info-detail"><i className="fa fa-user" aria-hidden="true" />{firstname} {lastname}</p>
        <p className="info-detail"><i className="fa fa-home" aria-hidden="true" /> {postalCode} , {address} {city}</p>
        <p className="info-detail"><i className="fa fa-mobile" aria-hidden="true" />{phone}</p>
        <p className="info-detail"><i className="fa fa-envelope-o" aria-hidden="true" />{email}</p>
      </div>
    </div>
  );
};

PrestaArea.propTypes = {
/*   firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchProInformation: PropTypes.func.isRequired, */
};


export default PrestaArea;
