/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <section className="footer__contact">
      <button type="button" className="footer__contact--form">Contactez-nous</button>
      <div className="footer__contact__part">
        <i className="footer__contact__part__icon fa fa-home" aria-hidden="true" />
        <h4 className="footer__contact__part__title">Adresse</h4>
        <p className="footer__contact__part__content">10 rue de Penthievre<br />78008 Paris</p>
      </div>
      <div className="footer__contact__part">
        <i className="footer__contact__part__icon fa fa-envelope" aria-hidden="true" />
        <h4 className="footer__contact__part__title">Courriel</h4>
        <p className="footer__contact__part__content">ofiesta.crusoe@gmail.com</p>
      </div>
      <div className="footer__contact__part">
        <i className="footer__contact__part__icon fa fa-phone" aria-hidden="true" />
        <h4 className="footer__contact__part__title">Téléphone</h4>
        <p className="footer__contact__part__content">09.74.76.80.67</p>
      </div>
    </section>
    <section className="footer__links">
      <ul>
        <li><a href="#">Qui-sommes-nous?</a></li>
        <li><a href="#">Mentions légales</a></li>
      </ul>
    </section>
    <section className="footer__socials">
      <a href="https://twitter.com" className="icon-button twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></a>
      <a href="https://facebook.com" className="icon-button facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></a>
      <a href="https://fr.linkedin.com" className="icon-button linkedin"><i className="fa fa-linkedin" aria-hidden="true" /><span /></a>
    </section>
  </footer>
);

export default Footer;
