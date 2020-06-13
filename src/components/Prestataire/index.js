/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useParams, Link } from 'react-router-dom';

import { Icon, Label } from 'semantic-ui-react';

import CarouselItem from 'src/containers/Prestataire/CarouselItem';
import ContactPresta from 'src/containers/ContactPresta';
import GoogleMap from 'src/containers/GoogleMap';
import Loader from 'src/components/Loader';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './prestataire.scss';

const Prestataire = ({
  currentService,
  loading,
  isLogged,
  fetchServiceInformation,
  favorites,
  deleteFavorites,
  updateFavorites,

}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchServiceInformation(id);
  }, []);

  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < currentService.note) {
      stars.push(<i key={i} className="stars fa fa-star" aria-hidden="true" />);
    }
    else {
      stars.push(<i key={i} className="stars fa fa-star-o" aria-hidden="true" />);
    }
  }

  const arrayFavoris = [];
  if (favorites.length > 0) {
    favorites.map((currentFavoris) => {
      const currentFavorisId = currentFavoris.id;
      arrayFavoris.push(currentFavorisId);
    });
  }
  console.log(arrayFavoris);

  const handleHeartClick = (evt) => {
    if (isLogged) {
      if (arrayFavoris.includes(currentService.id)) {
        deleteFavorites(currentService.id);
      }
      else {
        updateFavorites(currentService.id);
      }
    }
    else {
      const selectedPopup = document.querySelector(`#heartPopup${id}`);
      selectedPopup.classList.add('visible');
      setTimeout(() => {
        selectedPopup.classList.remove('visible');
      }, 5000);
    }
  };

  const handleClosePopup = () => {
    const selectedPopup = document.querySelector(`#heartPopup${id}`);
    selectedPopup.classList.remove('visible');
  };

  const cssClass = classNames('fav', { 'favTrue': (arrayFavoris.includes(currentService.id)) });
  console.log(currentService);
  /* console.log(currentService.serviceList.name); */

  return (
    <>
      {!loading && (
        <>
          <section className="prestataire">
            <div className="prestataire__back">
              <Link to="/" className="prestataire__back__link">
                <Icon name="chevron left" /> Retour
              </Link>
            </div>
            <div className="prestataire__top">
              <div className="heart-popup" id={`heartPopup${id}`}>
                <div className="heart-popup__content">
                  <span>
                    <Icon
                      className="heart-popupClose"
                      link
                      name="close"
                      onClick={handleClosePopup}
                    />
                  </span>
                  <Link className="heart-link" to="/se-connecter">
                    Pour vous connecter et ajouter un favori, cliquez ici.
                  </Link>
                </div>
              </div>
              <Icon
                className={cssClass}
                name="heart"
                id={id}
                onClick={handleHeartClick}
                size="large"
              />
              <Label className="prestataire__top__tag">
                <Icon name="tag" /> {currentService.serviceList.name}
              </Label>
              <div className="prestataire__top__gradesandbuttons">
                <h4 className="prestataire__top--title">
                  {currentService.title}
                </h4>
                <div className="prestataire__top--grades">
                  {stars}
                </div>
                
              </div>
              <div className="prestataire__top__buttons">
                  <ContactPresta />
                </div>
              
              
              
              
              
            </div>
            <div className="prestataire__intro">
              <CarouselItem />
              <div className="prestataire__intro__infos">
                
                <h5 className="prestataire__intro__infos--title">Infos</h5>
                <p className="prestataire__intro__infos--label">Adresse :</p>
                <p className="prestataire__intro__infos--content">{currentService.address} {currentService.postalCode} {currentService.city}</p>
                <p className="prestataire__intro__infos--label">Prix :</p>
                <p className="prestataire__intro__infos--content">Tarif à partir de {currentService.price}€</p>
                <p className="prestataire__intro__infos--label">Minimun invités :</p>
                <p className="prestataire__intro__infos--content">{currentService.minGuest}</p>
                <p className="prestataire__intro__infos--label">Maximun invités :</p>
                <p className="prestataire__intro__infos--content">{currentService.maxGuest}</p>
              </div>
            </div>
            <div className="prestataire__details">
              <h5 className="prestataire__intro__infos--title">Description {currentService.title}</h5>
              <p className="prestataire__details--description">
                {currentService.description}
              </p>
            </div>
          </section>
          <GoogleMap />
        </>
      )}
      {loading && <Loader />}
    </>
  );
};

Prestataire.propTypes = {
  fetchServiceInformation: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentService: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  deleteFavorites: PropTypes.func.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Prestataire;
