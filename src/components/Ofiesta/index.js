// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import PrivateRoute from 'src/containers/PrivateRoute';
import NavBar from 'src/containers/NavBar';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import MemberArea from 'src/containers/MemberArea';
import NewMember from 'src/containers/NewMember';
import Search from 'src/components/Search';
import Home from 'src/containers/Home';
import Page401 from 'src/components/Page401';
import Prestataire from 'src/containers/Prestataire';
import Presentation from 'src/components/Presentation';
import ConnectPresta from 'src/components/ConnectPresta';


// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      <Route path="/connecter-presta">
        <ConnectPresta />
      </Route>
      <PrivateRoute path="/mon-compte" component={MemberArea} userRole="admin" />
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
      <Route path="/401">
        <Page401 />
      </Route>
      <Route path="/" exact>
        <Search />
        <Home />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default Ofiesta;
