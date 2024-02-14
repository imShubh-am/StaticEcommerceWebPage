import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import mensKurta from '../data/mensKurta';
import lehngaCholi from '../data/lehngaCholi';
import '../Components/Products.css';

const Products = () => {
  return (
    <>
      <h2 className="text-start text-2xl font-extrabold text-gray-800 p-2 ms-3 bg-body-secondary shadow-lg rounded-4">
        Men's Clothings
      </h2>
      <Row xs={2} sm={3} md={4} lg={6} className="g-4 m-2">
        {mensKurta.map((product, index) => (
          <Col key={index} className="mb-4">
            <Card className="h-100 hover-card">
              <Card.Img
                className="object-cover object-top w-full h-40"
                variant="top"
                src={product.imageUrl}
                alt={product.brand}
              />
              <Card.Body>
                <Card.Text className="text-start fs-6">{product.title}</Card.Text>
                <Card.Title className="text-start">
                ₹{product.price}
                </Card.Title>
                <div className="text-start">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={i < product.rating ? faStar : faStarEmpty}
                      className="text-yellow-500"
                    />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="text-start text-2xl font-extrabold text-gray-800 p-2 ms-3 bg-body-secondary shadow-lg rounded-4">
        Women's Clothings
      </h2>
      <Row xs={2} sm={3} md={4} lg={6} className="g-4 m-2">
        {lehngaCholi.map((item, index) => (
          <Col key={index} className="mb-4">
            <Card className="h-100 hover-card">
              <Card.Img
                className="object-cover object-top w-full h-40"
                variant="top"
                src={item.imageUrl}
                alt={item.brand}
              />
              <Card.Body>
                <Card.Text className="text-start fs-6">{item.title}</Card.Text>
                <Card.Title className="text-start">
                {item.price}
                </Card.Title>
                <div className="text-start">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={i < item.rating ? faStar : faStarEmpty}
                      className="text-yellow-500"
                    />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
