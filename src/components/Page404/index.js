import React from 'react';

import { Link } from 'react-router-dom';
import image404 from 'src/assets/images/404.jpg';

import './page404.scss';

const Page404 = () => (
  <div className="page404">
    <div className="page404-imageContainer">
      <img className="page404-image" src={image404} alt="Visuel pour page 404" />
    </div>
    <p className="page404-message">Je ne sais pas ce que tu cherches mais tu ne le trouveras pas ici.</p>
    <p className="page404-message"><Link className="page404-link" to="/">Retour à l'accueil</Link></p>
  </div>
);

export default Page404;
