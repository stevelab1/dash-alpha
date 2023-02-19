import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

import "./PronounciationCard.css";

function RelatedWordsCard() {
  const { apiStatus } = useContext(SearchContext);

  const handleClick = () => {
    apiStatus.phonetics.play();
  }

  // if there is no api information display nothing
  if (Object.keys(apiStatus).length === 0) {
    return <div></div>;
//   } else if (!(apiStatus.phonetics)) {
//     return <div></div>;
  } else {
    // Otherwise, display the synonyms, antonyms and rhyming words
    return (
      <Row className="mx-0 my-2">
        <Card className="pronounciation-card col-12 col-lg-12 p-3 mx-auto border-0 text-center text-md-start">
          <Card.Body className="p-0 m-0">
          <div className="d-flex flex-column flex-md-row justify-content-center pb-3">
            <div className="syllables col-12 col-md-4 d-flex flex-column justify-content-center">
              <h3 className="m-2 p-0">Ready to pronounce it?</h3>
              <p className="syllable-breakdown m-2 p-0">{apiStatus.syllables.join(' - ')}</p>
            </div>
            <div className="sound col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <button className="play-button rounded px-3 col-12 col-md-8 col-lg-6" onClick={handleClick}>Play! 🔊</button>
            </div>
          </div>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default RelatedWordsCard;
