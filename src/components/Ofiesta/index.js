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
import UpdateMember from 'src/containers/UpdateMember';
import NewMember from 'src/containers/NewMember';
import Search from 'src/containers/Search';
import Home from 'src/containers/Home';
import Page401 from 'src/components/Page401';
import Prestataire from 'src/containers/Prestataire';
import Presentation from 'src/components/Presentation';
import PresentationTeam from 'src/components/PresentationTeam';
import ConnectPresta from 'src/containers/ConnectPresta';
import NewUserPro from 'src/containers/NewUserPro';
import Loader from 'src/components/Loader';
import Disconnect from 'src/containers/Disconnect';
import Page404 from 'src/components/Page404';
import PrestaArea from 'src/containers/PrestaArea';
import UpdateMemberPro from 'src/containers/UpdateMemberPro';
import UpdatePresta from 'src/components/UpdatePresta';
import Mentions from 'src/components/Mentions';

// == Composant
const Ofiesta = ({
  fetchDepartment,
  checkUserConnected,
  fetchNameService,
  loading,
  actualPage,
  serviceIdToSearch,
  departmentCodeToSearch,
  handleSearch,

}) => {
  useEffect(() => {
    checkUserConnected();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [serviceIdToSearch, departmentCodeToSearch, actualPage]);

  useEffect(() => {
    fetchNameService();
    fetchDepartment();
  }, []);

  const searchButtonActive = false;

  return (
    <div className="ofiesta">
      {loading && <Loader />}
      {(!loading) && (
        <>
          <NavBar />
          <Switch>
            <Route path="/mon-compte-pro/se-connecter">
              <ConnectPresta />
            </Route>
            <Route path="/mon-compte-pro/inscription">
              <NewUserPro />
            </Route>
            <PrivateRoute exact path="/mon-compte" component={MemberArea} userRole="ROLE_MEMBER" />
            <PrivateRoute exact path="/mon-compte/modifier" component={UpdateMember} userRole="ROLE_MEMBER" />
            <Route path="/se-connecter">
              <ConnectMembers />
            </Route>
            <PrivateRoute exact path="/mon-compte-pro" component={PrestaArea} userRole="ROLE_USER" />
            <PrivateRoute exact path="/mon-compte-pro/modifier" component={UpdateMemberPro} userRole="ROLE_USER" />
            <PrivateRoute exact path="/mon-compte-pro/modifier-prestation" component={UpdatePresta} userRole="ROLE_USER" />
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
            <Route path="/presentationTeam">
              <Search />
              <PresentationTeam />
            </Route>
            <Route path="/Mention-legales">
              <Mentions />
            </Route>
            <Route path="/401">
              <Page401 />
            </Route>
            <Route path="/deconnection">
              <Disconnect />
            </Route>
            <Route path="/" exact>
              <Search searchButton={searchButtonActive} />
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
  checkUserConnected: PropTypes.func.isRequired,
  fetchDepartment: PropTypes.func.isRequired,
  fetchNameService: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  actualPage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  serviceIdToSearch: PropTypes.array.isRequired,
  departmentCodeToSearch: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

// == Export
export default Ofiesta;
