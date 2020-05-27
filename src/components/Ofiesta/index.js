// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import Search from 'src/components/Search';
import Cards from 'src/components/Cards';

// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      <Route path="/">
        <Search />
        <Cards />
      </Route>
      <Route path="/se-connecter">
        <ConnectMembers />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Ofiesta;
