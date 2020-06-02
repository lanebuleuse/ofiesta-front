/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import CarouselItem from 'src/components/Prestataire/CarouselItem';
import ContactPresta from 'src/containers/ContactPresta';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './prestataire.scss';


const Prestataire = ({ services, isLogged }) => {
  const handleClick = () => {
  };
  const stars = [];
  const { id } = useParams();
  const service = services.find((currentService) => currentService.id == id);
  for (let i = 0; i < 5; i += 1) {
    if (i < service.note) {
      stars.push(<i key={i} className="stars fa fa-star" aria-hidden="true" />);
    }
    else {
      stars.push(<i key={i} className="stars fa fa-star-o" aria-hidden="true" />);
    }
  }
  return (
    <section className="prestataire">
      <div className="prestataire__top">
        <h4 className="prestataire__top--title">{service.title}</h4>
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
          <p className="prestataire__intro__infos--content">{service.address} {service.postalCode} {service.city}</p>
          <p className="prestataire__intro__infos--label">Prix :</p>
          <p className="prestataire__intro__infos--content">Tarif à partir de {service.price}€</p>
          <p className="prestataire__intro__infos--label">Minimun invités :</p>
          <p className="prestataire__intro__infos--content">{service.minGuest}</p>
          <p className="prestataire__intro__infos--label">Maimun invités :</p>
          <p className="prestataire__intro__infos--content">{service.maxGuest}</p>
        </div>
      </div>
      <div className="prestataire__details">
        <h5 className="prestataire__intro__infos--title">Description {service.title}</h5>
        <p className="prestataire__details--description">
          {service.description}
        </p>
      </div>
    </section>
  );
};

Prestataire.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Prestataire;
