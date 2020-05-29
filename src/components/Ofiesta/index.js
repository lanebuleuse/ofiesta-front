// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import NewMember from 'src/components/NewMember';
import Search from 'src/components/Search';
import Cards from 'src/components/Cards';
import Presentation from 'src/components/Presentation';
import ConnectPresta from '../ConnectPresta';


// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      <Route path="/se-connecter">
        <ConnectMembers />
      </Route>
      <Route path="/inscription">
        <NewMember />
      </Route>
      <Route path="/presentation">
        <Search />
        <Presentation />
      </Route>
      <Route path="/connecter-presta">
        <ConnectPresta />
      </Route>
      <Route path="/">
        <Search />
        <Cards />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Ofiesta;
