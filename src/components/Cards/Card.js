/* eslint-disable max-len */
import React from 'react';

const Card = () => (
  <div className="card">
    <img className="cardimg" src="https://source.unsplash.com/800x600/?dj" alt="" />
    <div className="cardcontent">
      <h3>Epic looking place</h3>
      <p>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen
      </p>
    </div>
    <button className="card-button" type="button">Voir les détails</button>
  </div>
);

export default Card;
