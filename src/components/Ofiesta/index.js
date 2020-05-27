// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/components/NavBar';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';

// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      <Route path="/se-connecter">
        <ConnectMembers />
      </Route>
      <Route path="/">
        <Page />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Ofiesta;
