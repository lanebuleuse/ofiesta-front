import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'src/components/Loader';

import Card from 'src/components/Card';

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
  favorites,
  fetchMemberinformation,
  loading,
}) => {
  useEffect(() => {
    fetchMemberinformation();
  }, []);
  console.log(favorites);
  
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="memberArea-mesinfos">
            <h2 className="memberArea-subTitle">Mes infos</h2>
            <Link to="/mon-compte/modifier" className="memberArea-modifier">Modifier</Link>
            <p className="memberArea-detail"><i className="fa fa-user" aria-hidden="true" />{lastname} {firstname}</p>
            <p className="memberArea-detail"><i className="fa fa-home" aria-hidden="true" />{address} {postalCode} {city}</p>
            <p className="memberArea-detail"><i className="fa fa-mobile" aria-hidden="true" />{phone}</p>
            <p className="memberArea-detail"><i className="fa fa-envelope-o" aria-hidden="true" />{email}</p>
          </div>
          <div className="memberArea-favori">
            <h2 className="memberArea-subTitle">Mes favoris</h2>
            {(favorites.length > 0) && (
              <>
                <div className="home">
                  {favorites.map((currentFavori) => {
                    return (
                      <Card key={currentFavori.id} {...currentFavori} />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

MemberArea.propTypes = {
  firstname: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  favorites: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,

  email: PropTypes.string.isRequired,
  fetchMemberinformation: PropTypes.func.isRequired,
};

export default MemberArea;
