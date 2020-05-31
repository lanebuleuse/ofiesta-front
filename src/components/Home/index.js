import React from 'react';

import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './home.scss';

const Home = ({ services }) => {
  return (
    <div className="home">
      {services.map((service) => (
        <Card key={service.id} {...service} />
      ))}
    </div>
  );
};

Home.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Home;
