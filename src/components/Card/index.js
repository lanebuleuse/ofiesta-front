import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from 'semantic-ui-react';
import { Badge } from 'react-bootstrap';

import './card.scss';

const Card = ({
  ServiceList,
  title,
  price,
  note,
  id,
  description,
  department,
  isLogged,
  favorites,
  media,
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

  const handleHeartClick = (evt) => {
    if (isLogged) {

    }
    console.log(evt.currentTarget.id);
  };

  const arrayFavoris = [];
  favorites.map((currentFavoris) => {
    const currentFavorisId = currentFavoris.id;
    arrayFavoris.push(currentFavorisId);
  });

  const cssClass = classNames('fav', { 'favTrue': (arrayFavoris.includes(id)) });

  return (
    <div className="card">
      <img
        src={media[0].path}
        className="card--image"
        alt=""
      />
      <div className="card__content">
        <h3 className="card__content--title">
          <Icon
            className={cssClass}
            name="heart"
            id={id}
            onClick={handleHeartClick}
          />
          {title} 
          <span className="card__content--dep">({department})</span>
        </h3>
        <Badge className="card__content--badge" key={ServiceList.id} variant="secondary">{ServiceList.name}</Badge>
        <p className="card__content--text">
          {liteDescription}
        </p>
        <div className="test">
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
  department: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
  media: PropTypes.array.isRequired,
};

export default Card;
