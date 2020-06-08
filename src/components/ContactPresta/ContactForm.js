import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';

const ContactForm = ({
  handleClose,
  putDateInContactState,
  changeFieldContact,
  firstname,
  lastname,
  email,
  phone,
  firstnameContact,
  lastnameContact,
  phoneContact,
  emailContact,
  date,
  message,
  sendFeedback,
}) => {
  useEffect(() => {
    putDateInContactState(firstname, lastname, email, phone);
  }, []);

  const handleSubmit = () => {
    const templateId = 'template_cyvMytvr';
    sendFeedback(templateId, {
      message_html: message,
      from_name: lastnameContact,
      from_firstname: firstnameContact,
      reply_to: emailContact,
      phone_contact: phoneContact,
      date_event: date,
    });
    handleClose();
  };
  const handleChange = (evt) => {
    changeFieldContact(evt.target.value, evt.currentTarget.name);
  };
  return (
    <Form>
      <Form.Row>
        <Form.Group md="6" controlId="validationCustom01" className="formContactPrestaInput">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            readOnly
            required
            type="text"
            placeholder="Votre nom"
            value={lastnameContact}
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom02" className="formContactPrestaInput">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            readOnly
            required
            type="text"
            placeholder="Votre prénom"
            value={firstnameContact}
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
            onChange={handleChange}
            value={emailContact}
            name="email"
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom04" className="formContactPrestaInput">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            pattern="[0-9]{10}"
            type="text"
            placeholder="Votre numéro de téléphone"
            onChange={handleChange}
            value={phoneContact}
            name="phone"
          />
        </Form.Group>
      </Form.Row>
      <Form.Group md="12" controlId="validationCustom05">
        <Form.Label>Date de l'événement</Form.Label>
        <Form.Control
          required
          type="date"
          onChange={handleChange}
          value={date}
          name="date"
        />
      </Form.Group>
      <Form.Group md="12" controlId="validationCustom06">
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          required
          type="textarea"
          onChange={handleChange}
          value={message}
          name="message"
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
  putDateInContactState: PropTypes.func.isRequired,
  changeFieldContact: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  sendFeedback: PropTypes.func.isRequired,
  firstnameContact: PropTypes.string.isRequired,
  lastnameContact: PropTypes.string.isRequired,
  phoneContact: PropTypes.string.isRequired,
  emailContact: PropTypes.string.isRequired,
};

export default ContactForm;
