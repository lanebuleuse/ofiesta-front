/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Search from 'src/containers/Search';

import PropTypes from 'prop-types';

const PrivateRoute = ({
  fetchMemberinformation,
  fetchProInformation,
  component: Component,
  role,
  userRole,
  isLogged,
  ...rest
}) => {
  const roles = localStorage.getItem('ROLES');
  useEffect(() => {
    if (roles.includes('ROLE_MEMBER')) {
      fetchMemberinformation();
    }
    if (roles.includes('ROLE_PROVIDER')) {
      fetchProInformation();
    }
  }, []);
  return (
    <>
      <Search />
      <Route
        {...rest}
        render={(props) => (
          (isLogged && role.includes(userRole)) ? (
            <Component {...props} />
          ) : (
            (userRole !== role)
              ? <Redirect to="/401" />
              : <Redirect to="/se-connecter" />
          ))}
      />
    </>
  );
};

PrivateRoute.propTypes = {
  fetchMemberinformation: PropTypes.func.isRequired,
  fetchProInformation: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.array.isRequired,
};

export default PrivateRoute;
