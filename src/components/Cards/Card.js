import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';


const CardElement = () => (
  <Card className="cardElement">
    <Card.Img
      variant="top"
      src="https://source.unsplash.com/800x600/?dj"
      className="cardElement--image"
    />
    <Card.Body className="cardElement__body">
      <Card.Title className="cardElement__body--title">Fiestamania</Card.Title>
      <Card.Text className="cardElement__body--text">
        Leader en Ile de France depuis déjà 13 ans,
        Fiestamania aura le désir de personnaliser votre mariage
        ayant conscience du caractère exceptionnel de votre demande.
        Conseillé par de nombreux lieux de prestige, Fiestamania sera
        votre partenaire idéal pour votre réception, l'équipe s'est vue
        assurer plus...
      </Card.Text>
    </Card.Body>
    <ListGroup className="cardElement__list list-group-flush">
      <ListGroupItem className="cardElement__list--item"><span>Note </span></ListGroupItem>
      <ListGroupItem className="cardElement__list--item"><span>Tarif à partir de </span>650€</ListGroupItem>
      <Button className="cardElement--button">Go somewhere</Button>
    </ListGroup>
    
  </Card>
);

export default CardElement;
