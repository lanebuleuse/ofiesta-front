import React from 'react';

const Card = () => (
  <div className="card">
    <img
      src="https://source.unsplash.com/800x600/?dj"
      className="card--image"
      alt=""
    />
    <div className="card__content">
      <h3 className="card__content--title">Fiestamania</h3>
      <p className="card__content--text">
        Leader en Ile de France depuis déjà 13 ans,
        Fiestamania aura le désir de personnaliser votre mariage
        ayant conscience du caractère exceptionnel de votre demande.
      </p>
      <ul className="card__content__list">
        <li className="card__content__list--item">
          <span>Note ☆☆☆☆☆</span>
        </li>
        <li className="card__content__list--item">
          <span>Tarif à partir de </span>
          500€
        </li>
      </ul>
    </div>
    <button className="card__button" type="button">Voir plus</button>
  </div>
);

export default Card;
