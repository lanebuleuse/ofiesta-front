// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/components/NavBar';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import NewMembers from 'src/components/NewMembers';

// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      <Route path="/inscription">
        <NewMembers />
      </Route>
      <Route path="/se-connecter">
        <ConnectMembers />
      </Route>
      <Route path="/">
        <Page />
      </Route>
    </Switch>
{/*     <Footer /> */}
  </div>
);

// == Export
export default Ofiesta;
