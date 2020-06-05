import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'src/components/Loader';

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
  loadding,
}) => {
  useEffect(() => {
    fetchMemberinformation();
  }, []);
  const authToken = localStorage.getItem('JWT_token');
  return (
    <>
      {loadding && <Loader />}
      {!loadding && (
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
            <Link to="/mon-compte/modifier" className="memberArea-modifier">Modifier</Link>
            <p className="memberArea-detail"><i className="fa fa-user" aria-hidden="true" />{lastname} {firstname}</p>
            <p className="memberArea-detail"><i className="fa fa-home" aria-hidden="true" />{address} {postalCode} {city}</p>
            <p className="memberArea-detail"><i className="fa fa-mobile" aria-hidden="true" />{phone}</p>
            <p className="memberArea-detail"><i className="fa fa-envelope-o" aria-hidden="true" />{email}</p>
          </div>
        </div>
      )}
    </>
  );
};

MemberArea.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchMemberinformation: PropTypes.func.isRequired,
  loadding: PropTypes.bool.isRequired,
};

export default MemberArea;
