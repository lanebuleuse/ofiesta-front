import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Modal } from 'react-bootstrap';
import ContactForm from 'src/containers/ContactPresta/ContactForm';
import './contactPresta.scss';

const ContactPresta = ({ isLogged }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="contactPresta">
      <a onClick={handleShow} className="button-contact">
        Contactez nous
      </a>

      {(!isLogged) && (
        <Modal className="modal--form" show={show} onHide={handleClose}>
          <Modal.Body>
            <p>Merci de vous connecter pour nous contacter</p>
          </Modal.Body>

          <Modal.Footer>
            <Link type="button" to="/inscription" className="buttonInForm">S'inscrire</Link>
            <Link type="button" to="/se-connecter" className="buttonInForm">Se connecter</Link>
          </Modal.Footer>
        </Modal>
      )}
      {(isLogged) && (
        <Modal className="modal--form" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contactez nous</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

ContactPresta.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default ContactPresta;
