import React, { useEffect } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import Card from 'src/components/Card';
import { Pagination } from 'semantic-ui-react';

import './home.scss';

const Home = ({ services, actualPage, numberOPage, changePageService, fetchServices }) => {
  const { pageId } = useParams();
  console.log(`Je suis sur l'URL ${pageId}`);

  const servicesList = services.results;

  const handleClick = (evt) => {
    const page = evt.target.getAttribute('value');
    if (page !== actualPage) {
/*       history.pushState(null, null, `/accueil/${page}`); */
      changePageService(page);
    }
  };

  return (
    <div className="home">
      {servicesList.map((service) => {
        return (
          <Card key={service.id} {...service} />
        );
      })}
      <Pagination
        defaultActivePage={actualPage}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={numberOPage}
        onClick={handleClick}
      />
    </div>
  );
};

Home.propTypes = {
  services: PropTypes.object.isRequired,
  actualPage: PropTypes.string.isRequired,
  numberOPage: PropTypes.number.isRequired,
  changePageService: PropTypes.func.isRequired,
};

export default Home;
