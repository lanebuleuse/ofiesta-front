import React from 'react';
import { Form } from 'react-bootstrap';

const ContactForm = () => (
  <Form>
    <Form.Row>
      <Form.Group md="6" controlId="validationCustom01">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Votre nom"
        />
      </Form.Group>
      <Form.Group md="6" controlId="validationCustom02">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Votre prénom"
        />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group md="6" controlId="validationCustom03">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Votre adresse mail"
        />
      </Form.Group>
      <Form.Group md="6" controlId="validationCustom04">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control
          pattern="[0-9]{10}"
          type="text"
          placeholder="Votre numéro de téléphone"
        />
      </Form.Group>
    </Form.Row>
    <Form.Group md="12" controlId="validationCustom05">
      <Form.Label>Date de l'événement</Form.Label>
      <Form.Control
        required
        type="date"
      />
    </Form.Group>
    <Form.Group md="12" controlId="validationCustom06">
      <Form.Label>Votre message</Form.Label>
      <Form.Control
        required
        type="textarea"
      />
    </Form.Group>
  </Form>
);

export default ContactForm;
