import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Badge } from 'react-bootstrap';

import './card.scss';

const Card = ({
  ServiceList,
  title,
  price,
  note,
  id,
  description,
}) => {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < note) {
      stars.push(<i key={i} className="stars fa fa-star" aria-hidden="true" />);
    }
    else {
      stars.push(<i key={i} className="stars fa fa-star-o" aria-hidden="true" />);
    }
  }
  const liteDescription = description.slice(0, 180);

  return (
    <div className="card">
      <img
        src="https://source.unsplash.com/800x600/?dj"
        className="card--image"
        alt=""
      />
      <div className="card__content">
        <h3 className="card__content--title">{title}</h3>
        <Badge key={ServiceList.id} variant="secondary">{ServiceList.name}</Badge>
        <p className="card__content--text">
          {liteDescription}
        </p>
        <ul className="card__content__list">
          <li className="card__content__list--item">
            <span>
              {stars}
            </span>
          </li>
          <li className="card__content__list--item">
            <span>Tarif à partir de</span>
            {price}€
          </li>
        </ul>
      </div>
      <Link
        to={`/prestataire/${id}`}
        className="card__button"
      >
        Voir plus
      </Link>
    </div>
  );
};

Card.propTypes = {
  ServiceList: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
