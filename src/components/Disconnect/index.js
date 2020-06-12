import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

const Disconnect = ({ disconnectUser }) => {
  useEffect(() => {
    disconnectUser();
  }, []);
  return (
    <Redirect to="/" />
  );
};

Disconnect.propTypes = {
  disconnectUser: PropTypes.func.isRequired,
};

export default Disconnect;
