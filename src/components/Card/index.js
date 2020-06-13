import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Icon, Label } from 'semantic-ui-react';

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
  updateFavorites,
  deleteFavorites,
}) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const handleClose = () => setmodalOpen(false);
  const handleOpen = () => setmodalOpen(true);

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

  const arrayFavoris = [];

  if (favorites.length > 0) {
    favorites.map((currentFavoris) => {
      const currentFavorisId = currentFavoris.id;
      arrayFavoris.push(currentFavorisId);
    });
  }

  const handleHeartClick = (evt) => {
    if (isLogged) {
      if (arrayFavoris.includes(id)) {
        deleteFavorites(id);
      }
      else {
        updateFavorites(id);
      }
    }
    else {
      const selectedPopup = document.querySelector(`#heartPopup${id}`);
      console.log(selectedPopup);
      selectedPopup.classList.add('visible');
      setTimeout(() => {
        selectedPopup.classList.remove('visible');
      }, 5000);
    }
  };

  const handleClosePopup = () => {
    const selectedPopup = document.querySelector(`#heartPopup${id}`);
    selectedPopup.classList.remove('visible');
  };

  const cssClass = classNames('fav', { favTrue: (arrayFavoris.includes(id)) });

  return (
    <div className="card">
      <img
        src={media[0].path}
        className="card--image"
        alt=""
      />
      <div className="card__content">
        <h3 className="card__content--title">
          <div className="heart-popup" id={`heartPopup${id}`}>
            <span>
              <Icon
                className="heart-popupClose"
                link
                name="close"
                onClick={handleClosePopup}
              />
            </span>
            <Link className="heart-link" to="/se-connecter">
              Vous devez être connecté pour ajouter des favoris
            </Link>
          </div>
          <Icon
            className={cssClass}
            name="heart"
            id={id}
            onClick={handleHeartClick}
          />
          {title}
          <span className="card__content--dep"> ({department})</span>
        </h3>
        <Label className="card__content--badge" key={ServiceList.id}>
          {ServiceList.name}
        </Label>
{/*         <Badge className="card__content--badge" key={ServiceList.id} variant="secondary">{ServiceList.name}</Badge> */}
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
  favorites: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  media: PropTypes.array.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  deleteFavorites: PropTypes.func.isRequired,
};

/* Card.defaultProps = {
  favorites: [],
}; */

export default Card;
