/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import CarouselItem from 'src/components/Prestataire/CarouselItem';
import ContactPresta from 'src/containers/ContactPresta';
import GoogleMap from 'src/containers/GoogleMap';
import Loader from 'src/components/Loader';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './prestataire.scss';

const Prestataire = ({ currentService, loading, fetchServiceInformation }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchServiceInformation(id);
  }, []);

  const handleClick = () => {
  };

  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < currentService.note) {
      stars.push(<i key={i} className="stars fa fa-star" aria-hidden="true" />);
    }
    else {
      stars.push(<i key={i} className="stars fa fa-star-o" aria-hidden="true" />);
    }
  }
  return (
    <>
      <section className="prestataire">
        <div className="prestataire__top">
          <h4 className="prestataire__top--title">
            {currentService.title}
          </h4>
          <div className="prestataire__top--grades">
            {stars}
          </div>
          <div className="prestataire__top__buttons">
            <ContactPresta />
            <i className="fa fa-heart-o" aria-hidden="true" onClick={handleClick} />
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
      {loading && <Loader />}
      {!loading && <GoogleMap />}
    </>
  );
};

Prestataire.propTypes = {
  fetchServiceInformation: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentService: PropTypes.object.isRequired,
};

export default Prestataire;
