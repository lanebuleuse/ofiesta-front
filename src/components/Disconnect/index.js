import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Disconnect = ({ disconnectUser }) => {
  disconnectUser();
  if (!localStorage.getItem('JWT_token')) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <Redirect to="/Page404" />
  );
};

Disconnect.propTypes = {
  disconnectUser: PropTypes.func.isRequired,
};

export default Disconnect;
