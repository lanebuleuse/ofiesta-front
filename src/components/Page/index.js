import React from 'react';
import { Route } from 'react-router-dom';

import Search from 'src/components/Search';
import Cards from 'src/components/Cards';

//import './page.scss';

const Page = () => (
  <div className="page">
    <div className="page-content">
      <Route
        path="/"
        exact
      >
        <Search />
        <Cards />
      </Route>
    </div>
  </div>
);

export default Page;
