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
  services,
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
        <p className="info-detail"><i className="fa fa-home" aria-hidden="true" /> {address} {postalCode} {city}</p>
        <p className="info-detail"><i className="fa fa-mobile" aria-hidden="true" />{phone}</p>
        <p className="info-detail"><i className="fa fa-envelope-o" aria-hidden="true" />{email}</p>
      </div>
      <h2 className="gestionPrestations--title">Mes Prestations</h2>
      {services.map((service) => {
        const serviceList = service.ServiceList;
        return (
          <div className="info-mesinfos" key={service.id}>
            <h2 className="info-subTitle">{service.title}</h2>
            <Link to="/mon-compte-pro/modifier-prestation" className="prestaArea-modifier">Gerer</Link>
            <p className="info-detail detail-presta"><span>Localisation : </span>{service.city} ({service.department})</p>
            <p className="info-detail detail-presta"><span>Services : </span>{serviceList.name}</p>
            <p className="info-detail detail-presta"><span>Prix (à partir de) : </span>{service.price}€</p>
            <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>{service.minGuest}</p>
            <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>{service.maxGuest}</p>
            <p className="info-detail detail-presta"><span>Decription : </span>{service.description}</p>
          </div>
        );
      })}
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
