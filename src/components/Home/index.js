import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';
import { Pagination } from 'react-bootstrap';

import './home.scss';

const Home = ({ services }) => {
  const servicesList = services.results;
/*   console.log(services);
  console.log(services.results);
  let paginItem = [];
  console.log(services.count_pages);
  if (services.count_pages < 3) {
    for (let i = services.current_page; i <= services.count_pages; i++) {
      if (i === services.current_page) {
        paginItem.push(<Pagination.Item active>{i}</Pagination.Item>);
      }
      paginItem.push(<Pagination.Item>{i}</Pagination.Item>);
    }
  }
  console.log(paginItem); */

  const handleClickPrev = () => {
    if(services.current_page !== 1) {
      
    }
  };

  return (
    <div className="home">
      {servicesList.map((service) => {
        return (
          <Card key={service.id} {...service} />
        );
      })}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev onClick={handleClickPrev} />
        <Pagination.Item>{services.current_page}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

Home.propTypes = {
  services: PropTypes.object.isRequired,
};

export default Home;
