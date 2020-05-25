// == Import npm
import React from 'react';

// == Import
import NavBar from 'src/components/NavBar';
import Search from 'src/components/Search';

// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Search />
    <div>cards</div>
    <div>themes</div>
    <div>footer</div>
  </div>
);

// == Export
export default Ofiesta;
