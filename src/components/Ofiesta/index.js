// == Import npm
import React from 'react';

// == Import
import NavBar from 'src/components/NavBar';
import Search from 'src/components/Search';
import Footer from 'src/components/Footer';

// == Composant
const Ofiesta = () => (
  <div className="ofiesta">
    <NavBar />
    <Search />
    <div>cards</div>
    <div>themes</div>
    <Footer />
  </div>
);

// == Export
export default Ofiesta;
