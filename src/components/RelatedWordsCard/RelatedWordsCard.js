import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

import "./RelatedWordsCard.css";

function generateList(words, message, word) {
  console.log(words);
  if (!words || words.length === 0) {
    words = undefined;
  }
  console.log(words);
  if (!words) {
    return (
      <li className="list-group-item border-0" key="error">
        {`There are no ${message} ${word}`}
      </li>
    )
  } else {
    return words.map((item) => {
      return (
        <li className="list-group-item border-0" key={item}>
          {item}
        </li>
      );
    });
  }
}

function RelatedWordsCard() {
  const { apiStatus } = useContext(SearchContext);

  // if there is no api information display nothing
  if (Object.keys(apiStatus).length === 0) {
    return <div></div>;
  } else {
    // Otherwise, display the synonyms, antonyms and rhyming words
    return (
      <Row className="mx-0 my-2">
        <Card className="related-words-card col-12 col-lg-12 p-3 mx-auto border-0">
          <Card.Body className="p-0 m-0">
            <Card.Title className="p-0 mb-3">
              <h2 class="my-heading" >Words related to {apiStatus.word}</h2>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <div className="d-flex flex-column flex-md-row flex-grow-1 justify-content-evenly pb-3">
              {/* rhymes card */}
              <Card className="rhymes-card col-12 col-md-3 my-2 border-0">
                <Card.Body>
                  <Card.Title className="p-0 mb-3">Rhyming Words</Card.Title>
                  <ul className="list-group">
                    {generateList(apiStatus.rhymes, 'words that rhyme with', apiStatus.word)}
                  </ul>
                </Card.Body>
              </Card>

              {/* synonyms card */}
              <Card className="synonyms-card col-12 col-md-3 my-2 border-0">
                <Card.Body>
                  <Card.Title className="p-0 mb-3">Synonyms</Card.Title>
                  <ul className="list-group">
                    {generateList(apiStatus.synonyms, 'synonyms for', apiStatus.word)}
                  </ul>
                </Card.Body>
              </Card>

              {/* antonyms card */}
              <Card className="antonyms-card col-12 col-md-3 my-2 border-0">
                <Card.Body>
                  <Card.Title className="p-0 mb-3">Antonyms</Card.Title>
                  <ul className="list-group">
                    {generateList(apiStatus.antonyms, 'antonyms for', apiStatus.word)}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default RelatedWordsCard;
