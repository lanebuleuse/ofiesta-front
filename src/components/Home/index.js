import React from 'react';

import PropTypes from 'prop-types';

import Card from 'src/containers/Card';
import { Pagination } from 'semantic-ui-react';

import './home.scss';

const Home = ({
  services,
  actualPage,
  numberOPage,
  changePageService,
}) => {
  const servicesList = services.results;

  const handleClick = (evt, data) => {

    if (data.activePage !== actualPage) {

      changePageService(data.activePage);
    }
  };

  return (
    <>
      {(servicesList.length === 0) && (
        <div className="noResult">Il n'y a aucun résultat à votre recherche</div>
      )}
      {(servicesList.length > 0) && (
        <>
          <div className="home">
            {servicesList.map((service) => {
              console.log(service);
              return (
                <Card key={service.id} {...service} />
              );
            })}
          </div>
          <div className="home-pagination">
            <Pagination
              defaultActivePage={actualPage}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={numberOPage}
              onPageChange={handleClick}
            />
          </div>
        </>
      )}
    </>
  );
};

Home.propTypes = {
  services: PropTypes.object.isRequired,
  actualPage: PropTypes.number.isRequired,
  numberOPage: PropTypes.number.isRequired,
  changePageService: PropTypes.func.isRequired,
};

export default Home;
