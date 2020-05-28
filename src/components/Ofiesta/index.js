// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import ConnectMembers from 'src/containers/ConnectMembers';
import MemberArea from 'src/components/MemberArea';
import NewMember from 'src/containers/NewMember';
import Search from 'src/components/Search';
import Cards from 'src/components/Cards';
import Prestataire from 'src/components/Prestataire';


// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Switch>
      <Route path="/membre">
        <Search />
        <MemberArea />
      </Route>
      <Route path="/se-connecter">
        <ConnectMembers />
      </Route>
      <Route path="/inscription">
        <NewMember />
      </Route>
      <Route path="/toto">
        <Search />
        <Prestataire />
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
