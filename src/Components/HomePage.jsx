import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainCarousel from '../data/MainCarouselData'

const Homepage = () => {
  return (
    <Carousel style={{ height: '100vh' }}>
      {mainCarousel.map((data, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={data.image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Homepage;
