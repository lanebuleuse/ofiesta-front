import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Prestation = ({
  price,
  description,
  city,
  department,
  title,
  minGuest,
  maxGuest,
  ServiceList,
}) => (
  <div className="info-mesinfos">
    <h2 className="info-subTitle">{title}</h2>
    <Link to="/mon-compte-pro/modifier-prestation" className="prestaArea-modifier">Gerer</Link>
    <p className="info-detail detail-presta"><span>Localisation : </span>{city} ({department})</p>
    <p className="info-detail detail-presta"><span>Services : </span>{ServiceList}</p>
    <p className="info-detail detail-presta"><span>Prix (à partir de) : </span>{price}€</p>
    <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>{minGuest}</p>
    <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>{maxGuest}</p>
    <p className="info-detail detail-presta"><span>Decription : </span>{description}</p>
  </div>
);

Prestation.propTypes = {
  ServiceList: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  minGuest: PropTypes.number.isRequired,
  maxGuest: PropTypes.number.isRequired,
};

export default Prestation;
