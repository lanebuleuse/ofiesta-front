import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';
import './contactPresta.scss';

const ContactPrestat = ({ isLogged }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button-contact">
        Contactez nous
      </Button>

      {(!isLogged) && (
        <Modal show={show} onHide={handleClose}>


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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contactez nous</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
          </Modal.Body>
          <Modal.Footer>
            <Button className="buttonInFormValid" onClick={handleClose}>
              Envoyer votre demande
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

ContactPrestat.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default ContactPrestat;
