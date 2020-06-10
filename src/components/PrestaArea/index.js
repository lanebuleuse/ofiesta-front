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
    <>
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
        <div className="info-mesinfos">
          <h2 className="info-subTitle">Location salle</h2>
          <Link to="/mon-compte-pro/modifier" className="prestaArea-modifier">Gerer</Link>
          <p className="info-detail detail-presta"><span>Localisation : </span>Clermont-Ferrand (63)</p>
          <p className="info-detail detail-presta"><span>Prix (à partir de) : </span>3500€</p>
          <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>5</p>
          <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>35000</p>
          <p className="info-detail detail-presta"><span>Decription : </span>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
        </div>
        <div className="info-mesinfos">
          <h2 className="info-subTitle">Location salle</h2>
          <Link to="/mon-compte-pro/modifier" className="prestaArea-modifier">Gerer</Link>
          <p className="info-detail detail-presta"><span>Localisation : </span>Clermont-Ferrand (63)</p>
          <p className="info-detail detail-presta"><span>Prix (à partir de) : </span>3500€</p>
          <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>5</p>
          <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>35000</p>
          <p className="info-detail detail-presta"><span>Decription : </span>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
        </div>
        <div className="info-mesinfos">
          <h2 className="info-subTitle">Location salle</h2>
          <Link to="/mon-compte-pro/modifier" className="prestaArea-modifier">Gerer</Link>
          <p className="info-detail detail-presta"><span>Localisation : </span>Clermont-Ferrand (63)</p>
          <p className="info-detail detail-presta"><span>Prix (à partir de) : </span>3500€</p>
          <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>5</p>
          <p className="info-detail detail-presta"><span>Nombre d'invités minimum : </span>35000</p>
          <p className="info-detail detail-presta"><span>Decription : </span>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
        </div>
      </div>

    </>
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
