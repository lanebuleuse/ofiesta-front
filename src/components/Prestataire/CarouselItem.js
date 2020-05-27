import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselItem = () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="src/assets/images/carousel1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-320-240-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-320-240-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default CarouselItem;
