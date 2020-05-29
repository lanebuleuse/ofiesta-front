import React, { useState } from 'react';
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

      <Modal show={show} onHide={handleClose}>
        {(!isLogged) && (
          <>
            <Modal.Body>
              <p>Merci de vous connecter pour nous contacter</p>
            </Modal.Body>

            <Modal.Footer>
              <button type="button" href="/inscription" className="button-contact">S'inscrire</button>
              <button type="button" href="/se-connecter" className="button-contact">Se connecter</button>
            </Modal.Footer>
          </>
        )}
        {(isLogged) && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Contactez nous</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ContactForm />
            </Modal.Body>
            <Modal.Footer>
              <Button className="button-contact" onClick={handleClose}>
                Envoyer votre demande
              </Button>
            </Modal.Footer>
          </>
        )}

      </Modal>
    </>
  );
};

ContactPrestat.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default ContactPrestat;
