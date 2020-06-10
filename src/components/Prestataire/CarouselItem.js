import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const CarouselItem = ({ currentService }) => {
  const media = currentService.media;
  console.log(currentService.media);
  return (
    <Carousel className="prestataire__intro--carousel">
      <>
        {media.map((currentMedia) => {
          console.log(currentMedia);
          return (
          <Carousel.Item key={currentMedia.id}>
            <img
              className="d-block w-100"
              src={currentMedia.path}
              alt="First slide"
            />
          </Carousel.Item>
        
        );
          })}
      </>
    </Carousel>
  );
};

CarouselItem.propTypes = {
  currentService: PropTypes.object.isRequired,
};

export default CarouselItem;
