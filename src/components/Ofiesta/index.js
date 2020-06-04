// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

// == Import
import PrivateRoute from 'src/containers/PrivateRoute';
import NavBar from 'src/containers/NavBar';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import MemberArea from 'src/containers/MemberArea';
import NewMember from 'src/containers/NewMember';
import Search from 'src/containers/Search';
import Home from 'src/containers/Home';
import Page401 from 'src/components/Page401';
import Prestataire from 'src/containers/Prestataire';
import Presentation from 'src/components/Presentation';
import ConnectPresta from 'src/components/ConnectPresta';
import ConnectionPresta from 'src/containers/ConnectionPresta';
import NewPresta from 'src/containers/NewPresta';
import Loader from 'src/components/Loader';
import Page404 from 'src/components/Page404';

// == Composant
const Ofiesta = ({ fetchServices, fetchDepartment, loading }) => {
  // This effect is start one time at the launch of the application with [] at the end
  useEffect(() => {
    fetchDepartment();
    fetchServices();
  }, []);
  return (
    <div className="ofiesta">
      {loading && <Loader />}
      {!loading && (
        <>
          <NavBar />
          <Switch>
            <Route path="/mon-compte-pro/se-connecter">
              <ConnectionPresta />
            </Route>
            <Route path="/mon-compte-pro/inscription">
              <NewPresta />
            </Route>
            <Route path="/connecter-presta">
              <ConnectPresta />
            </Route>
            <PrivateRoute path="/mon-compte" component={MemberArea} userRole="ROLE_USER" />
            <Route path="/se-connecter">
              <ConnectMembers />
            </Route>
            <Route path="/inscription">
              <NewMember />
            </Route>
            <Route exact path="/prestataire/:id">
              <Search />
              <Prestataire />
            </Route>
            <Route path="/presentation">
              <Search />
              <Presentation />
            </Route>
            <Route path="/401">
              <Page401 />
            </Route>
            <Route path="/" exact>
              <Search />
              <Home />
            </Route>
            <Route>
              <Search />
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
};

Ofiesta.propTypes = {
  fetchServices: PropTypes.func.isRequired,
  fetchDepartment: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Ofiesta;
