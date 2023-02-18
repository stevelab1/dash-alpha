import "./Hero.css";
import { Container, Row, Col } from "react-bootstrap";

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={7}>
            <div className="hero-text">
              <h1 className="hero-title">What's the Word?</h1>
              <p className="hero-subtitle">
                Search for a word, any word, make it fun? make it serious? We've got you covered!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={7}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Hero;
