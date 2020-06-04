import React from 'react';

import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './home.scss';

const Home = ({ services }) => {
  console.log(services);
  console.log(services.results);
  const servicesList = services.results;
  console.log(servicesList);
  return (
    <div className="home">
      {servicesList.map((service) => {
        console.log(service);
        return (
          <Card key={service.id} {...service} />
        );
      })}
    </div>
  );
};

Home.propTypes = {
  services: PropTypes.object.isRequired,
};

export default Home;
