/* eslint-disable max-len */
// == Import npm
import React from 'react';

import './mentions.scss';
 

// == Composant

const Mentions = () => (

  <div className="mention">
    <h1 className="mention--title">Mentions légales</h1>
    <span className="mention--span">En vigueur au 06/06/2020</span>
    <p className="mention--text">
      Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site O'Fiesta les présentes mentions légales.
      La connexion et la navigation sur le site (indiquer le nom du site) par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
      Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».
    </p>
    <h2 className="mention--subtitle">ARTICLE 1 : L’éditeur</h2>
    <p className="mention--text">
      L'édition du site O'Fiesta est assurée par la Société Multinationale Ofiesta au capital de 1500000 euros, immatriculée au RCS de Paris sous le numéro 05829864 dont le siège social est situé au Rue de la Paix, numéro de téléphone 0639648749, adresse e-mail : ofiesta.crusoe@gmail.com.
      N° de TVA intracommunautaire : 063897
      Le Directeur de la publication est Crusoe Ofiesta
    </p>
    <h2 className="mention--subtitle">ARTICLE 2 : L’hébergeur</h2>
    <p className="mention--text">
      L'hébergeur du site O'Fiesta est la Société AWS, dont le siège social est situé au AWS , avec le numéro de téléphone : 0685789652.
    </p>
    <h2 className="mention--subtitle">ARTICLE 3 : Accès au site</h2>
    <p className="mention--text">
      Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
      En cas de modification, interruption ou suspension des services le site O'Fiesta ne saurait être tenu responsable.
    </p>
    <h2 className="mention--subtitle">ARTICLE 4 : Collecte des données</h2>
    <p className="mention--text">
      Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le site est déclaré à la CNIL sous le numéro 689154.
      En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
      · via son espace personnel ;
    </p>
    <h2 className="mention--subtitle">ARTICLE 5 : Cookies</h2>
    <p className="mention--text">
      L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
      En naviguant sur le site, il les accepte.
      Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
    </p>
    <h2 className="mention--subtitle">ARTICLE 6 : Propriété intellectuelle</h2>
    <p className="mention--text">
      Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site O'Fiesta, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
      Pour plus d’informations, se reporter aux CGU du site O'Fiesta accessible à la rubrique« CGU »
    </p>
  </div>
);

export default Mentions;
