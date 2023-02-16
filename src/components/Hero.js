import './Hero.css';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search using the `searchTerm` state variable
    console.log(`Searching for "${searchTerm}"`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="hero">
      <Container>
        <Row>
          <Col>
            <div className="hero-text">
              <h1 className="hero-title">Whats the Word?</h1>
              <p className="hero-subtitle">Search for a word, any word, make it fun? make it serious? We've got you covered!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="hero-form" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Enter a word"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
