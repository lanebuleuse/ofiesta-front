import React from 'react';
import PropTypes from 'prop-types';

import './connectPresta.scss';

const ConnectPresta = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="connectPresta">
      <h1 className="connectPresta-messages">Mes messages</h1>
      <div className="connectPresta-form" onSubmit={handleSubmit}>
        <button type="submit" className="adminConnect-submit">Tout voir</button>
        <div className="connectPresta-txt">
          <p className="connectPresta-texte">De</p>
          <p className="connectPresta-texte">Sujet</p>
          <p className="connectPresta-texte">Action</p>
        </div>
        <button type="submit" className="adminConnect-submit">Lire</button>
      </div>
    </div>
  );
};

export default ConnectPresta;
