// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './presentationTeam.scss';


// == Composant

const PresentationTeam = () => (

  <div className="presentation">
    <div className="presentation-liste">
      <ul className="wrapper">
        <li className="liste-pres">
          <li><Link to="/presentation">Qui-sommes-nous?</Link></li>
        </li>
        <li className="liste-pres">
          <li><Link to="/presentationTeam">L'équipe</Link></li>
        </li>
      </ul>
      <div className="presentation-txt">
        <h1 className="presentation-title">L'équipe</h1>
        <p className="presentation--about--team">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia
        </p>
      </div>
    </div>
  </div>

);


export default PresentationTeam;
