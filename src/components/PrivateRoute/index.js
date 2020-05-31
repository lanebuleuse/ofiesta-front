import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

const PrivateRoute = ({ isLogged, ...rest}) => {
  console.log(isLogged);
  return (
    <Route
      {...rest}
      render={(props) =>
        (isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        ))}

    />
  );
};

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default PrivateRoute;
