/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <section className="footer__links">
      <ul>
        <li><Link to="/mon-compte-pro/se-connecter">Espace pro</Link></li>
        <li><a href="#">Qui-sommes-nous?</a></li>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Contactez-nous</a></li>
      </ul>
    </section>
    <section className="footer__socials">
      <p className="footer__contact__part__follow">Suivez-nous sur </p>
      <a href="https://twitter.com" className="icon-button twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></a>
      <a href="https://facebook.com" className="icon-button facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></a>
      <a href="https://fr.linkedin.com" className="icon-button linkedin"><i className="fa fa-linkedin" aria-hidden="true" /><span /></a>
    </section>
  </footer>
);
export default Footer;
