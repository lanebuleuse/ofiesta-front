import React from 'react';

import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './home.scss';

const Home = ({ services }) => {
  console.log(services);
  return (
    <div className="home">
      <Card />
    </div>
  );
};

Home.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Home;
