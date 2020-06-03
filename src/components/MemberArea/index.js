import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import './memberArea.scss';

const MemberArea = ({
  firstname,
  lastname,
  phone,
  address,
  postalCode,
  city,
  email,
  fetchMemberinformation,
}) => {
  useEffect(() => {
    fetchMemberinformation(localStorage.getItem('USER_ID'), localStorage.getItem('JWT_token'));
  }, []);
  return (
    <div className="memberArea">
      <div className="memberArea-favori">
        <h2 className="memberArea-subTitle">Mes favoris</h2>
        <a className="memberArea-modifier">Tous mes favoris</a>
        <ul>
          <li><a>Mes locations de salles</a></li>
          <li><a>Mes traiteurs</a></li>
          <li><a>Mes DJ</a></li>
        </ul>
      </div>
      <div className="memberArea-mesinfos">
        <h2 className="memberArea-subTitle">Mes infos</h2>
        <a className="memberArea-modifier">Modifier</a>
        <p className="memberArea-detail"><i className="fa fa-user" aria-hidden="true" />{lastname} {firstname}</p>
        <p className="memberArea-detail"><i className="fa fa-home" aria-hidden="true" />{address} {postalCode} {city}</p>
        <p className="memberArea-detail"><i className="fa fa-mobile" aria-hidden="true" />{phone}</p>
        <p className="memberArea-detail"><i className="fa fa-envelope-o" aria-hidden="true" />{email}</p>
      </div>
    </div>
  );
};

MemberArea.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchMemberinformation: PropTypes.func.isRequired,
};

export default MemberArea;
