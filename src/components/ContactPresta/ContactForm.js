import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';

const ContactForm = ({
  handleClose,
  changeField,
  firstname,
  lastname,
  email,
  phone,
  date,
  message,
  sendFeedback,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const templateId = 'template_cyvMytvr';
    sendFeedback(templateId, { message_html: message, from_name: lastname, reply_to: email });
    handleClose();
  };
  return (
    <Form>
      <Form.Row>
        <Form.Group md="6" controlId="validationCustom01" className="formContactPrestaInput">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre nom"
            onChange={changeField}
            value={lastname}
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom02" className="formContactPrestaInput">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre prénom"
            onChange={changeField}
            value={firstname}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group md="6" controlId="validationCustom03" className="formContactPrestaInput">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Votre adresse mail"
            onChange={changeField}
            value={email}
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom04" className="formContactPrestaInput">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            pattern="[0-9]{10}"
            type="text"
            placeholder="Votre numéro de téléphone"
            onChange={changeField}
            value={phone}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group md="12" controlId="validationCustom05">
        <Form.Label>Date de l'événement</Form.Label>
        <Form.Control
          required
          type="date"
          onChange={changeField}
          value={date}
        />
      </Form.Group>
      <Form.Group md="12" controlId="validationCustom06">
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          required
          type="textarea"
          onChange={changeField}
          value={message}
        />
      </Form.Group>
      <Button className="buttonInFormValid" onClick={handleSubmit}>
        Envoyer votre demande
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  sendFeedback: PropTypes.func.isRequired,
};

export default ContactForm;
