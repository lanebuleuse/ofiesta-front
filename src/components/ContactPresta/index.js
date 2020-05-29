import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';
import './contactPresta.scss';

const ContactPrestat = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button-contact">
        Contactez nous
      </Button>

      <Modal show={show} onHide={handleClose}>
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
      </Modal>
    </>
  );

};

export default ContactPrestat;
