/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  role,
  userRole,
  isLogged,
  ...rest
}) => (
  /*     <Route
      {...rest}
      render={(props) => (
        (isLogged && userRole === role) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/se-connecter" />
        ))}
    /> */
  <Route
    {...rest}
    render={(props) => (
      (isLogged && userRole === role) ? (
        <Component {...props} />
      ) : (
        (userRole !== role)
          ? <Redirect to="/401" />
          : <Redirect to="/se-connecter" />
      ))}
  />
);


PrivateRoute.propTypes = {
  userRole: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default PrivateRoute;
