// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/containers/NavBar';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import MemberArea from 'src/containers/MemberArea';
import NewMember from 'src/containers/NewMember';
import Search from 'src/components/Search';
import Home from 'src/containers/Home';
import Prestataire from 'src/components/Prestataire';
import Presentation from 'src/components/Presentation';
import ConnectPresta from '../ConnectPresta';

// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      
      <Route path="/connecter-presta">
        <ConnectPresta />
      </Route>
      <Route path="/mon-compte">
        <Search />
        <MemberArea />
      </Route>
      <Route path="/se-connecter">
        <ConnectMembers />
      </Route>
      <Route path="/inscription">
        <NewMember />
      </Route>
      <Route path="/prestataire/:id">
        <Search />
        <Prestataire />
      </Route>
      <Route path="/presentation">
        <Search />
        <Presentation />
      </Route>
      <Route path="/">
        <Search />
        <Home />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Ofiesta;
