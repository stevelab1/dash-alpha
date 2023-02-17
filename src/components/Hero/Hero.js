import "./Hero.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "../SearchForm";

const Hero = () => {
  const handleSearch = (searchTerm) => {
    console.log(`Searching for "${searchTerm}"`);
  };

  return (
    <div className="hero">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={7}>
            <div className="hero-text">
              <h1 className="hero-title">Whats the Word?</h1>
              <p className="hero-subtitle">
                Search for a word, any word, make it fun? make it serious? We've
                got you covered!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={7}>
            <SearchForm onSearch={handleSearch} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;


// My HERO code from when working on Scrabble below (ADAM)

// import "./Hero.css";
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import SearchForm from '../SearchForm';

// const Hero = ({ onSearch }) => {
//   return (
//     <div className="hero">
//       <Container fluid>
//         <Row className="justify-content-center">
//           <Col xs={12} md={8} lg={7}>
//             <div className="hero-text">
//               <h1 className="hero-title">What's the Word?</h1>
//               <p className="hero-subtitle">
//                 Search for a word, any word, make it fun? make it serious? We've got you covered!
//               </p>
//             </div>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           <Col xs={12} md={8} lg={7}>
//             <SearchForm onSearch={onSearch} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Hero;