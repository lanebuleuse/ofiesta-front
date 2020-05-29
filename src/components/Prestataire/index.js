/* eslint-disable max-len */
import React from 'react';

import CarouselItem from 'src/components/Prestataire/CarouselItem';
import ContactPresta from 'src/containers/ContactPresta';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './prestataire.scss';

const Prestataire = () => (
  <section className="prestataire">
    <div className="prestataire__top">
      <h4 className="prestataire__top--title">Fiestamania</h4>
      <div className="prestataire__top--grades">☆☆☆☆☆</div>
      <div className="prestataire__top__buttons">
        <ContactPresta />
        <button className="prestataire__top__buttons--fav" type="button">♡</button>
      </div>
    </div>
    <div className="prestataire__intro">
      <CarouselItem />
      <div className="prestataire__intro__infos">
        <h5 className="prestataire__intro__infos--title">Infos</h5>
        <p className="prestataire__intro__infos--label">Adresse :</p>
        <p className="prestataire__intro__infos--content">Centre ville 75000 Paris (Paris)</p>
        <p className="prestataire__intro__infos--label">Prix :</p>
        <p className="prestataire__intro__infos--content">Tarif à partir de 650€</p>
        <p className="prestataire__intro__infos--label">Minimun invités :</p>
        <p className="prestataire__intro__infos--content">10</p>
        <p className="prestataire__intro__infos--label">Maimun invités :</p>
        <p className="prestataire__intro__infos--content">5000</p>
      </div>
    </div>
    <div className="prestataire__details">
      <h5 className="prestataire__intro__infos--title">Description Fiestamania</h5>
      <p className="prestataire__details--description">
        Leader en Ile de France depuis déjà 13 ans, Fiestamania aura le désir de personnaliser votre mariage ayant conscience du caractère exceptionnel de votre demande. Conseillé par de nombreux lieux de prestige, Fiestamania sera votre partenaire idéal pour votre réception, l'équipe s'est vue assurer plus de 1500 mariages et les avis des mariés sont unanimes.
        Services proposés
        Ces professionnels ne souhaitent pas pas vous imposer un style, mais vous faire profiter de leur expérience professionnelle et contribuer ainsi à faire de votre mariage une journée inoubliable !
        Pour cela, l'équipe met en avant votre personnalité, avec vous, elle choisit le "profil" de de
        Dj souhaité et vos goûts musicaux. C'est sa "marque de fabrique", un mariage qui vous ressemble avant tout !
        Ne tardez pas à prendre rendez-vous, cela ne vous engage en rien, mais permet à Fiestamania de préparer votre mariage avec la plus grande attention. Lors de votre mariage, faites le choix d'un DJ professionnel qui sera en mesure de s'adapter à vos attentes pour vous garantir le meilleur.
        Fiestamania est également votre interlocuteur unique pour vous proposer des prestations de qualité (Magie, trio, jazz, gospel, Photoboth) avec des professionnels pour sublimer votre mariage et surprendre vos invités ! Venez vous ajouter à la longue liste des mariés recommandant leurs services !
        Méthode de travail
        Fiestamania propose un premier rendez-vous où vous remplirez ensemble un questionnaire détaillé permettant de connaître avec précisions vos souhaits musicaux.
        Votre prestataire sait s'adapter à chaque demande, les djs ont une réactivité à la piste de danse, sont chaleureux mais pas familiers, portent une tenue vestimentaire soignée.
        Le planning des interventions, apprécié des traiteurs, permet une bonne gestion des interventions des invités durant le dîner (discours, interventions des témoins, vidéo) et évite d'ouvrir le bal trop tard !
        Zone d'activité
        C'est à Paris que Fiestamania a décidé d'installer ses locaux pour être au plus près de vos besoins et de vos attentes. Cependant l'entreprise sera en mesure de se déplacer dans toute l'Ile de France et ses départements limitrophes.
        La société de déplace aussi dans un périmètre de 200 kilomètres dans la région Bourgogne- Lyonnaise- Annecy.
      </p>
    </div>
  </section>
);

export default Prestataire;
