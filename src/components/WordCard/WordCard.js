import React, { useContext } from "react";
import { Card, Alert } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";
import TypewriterAlert from "./TypewriterAlert";
import "./wordcard.css";

function WordCard({ searchError }) {
  const { apiStatus } = useContext(SearchContext);

  if (searchError) {
    return (
      <Alert variant="warning" className="mt-3">
        {searchError}
      </Alert>
    );
  } else if (Object.keys(apiStatus).length === 0) {
    return (
      <Card style={{ border: "none" }}>
        <Card.Body className="bodycard">
          <Card.Title className="bodytitle">Investig8</Card.Title>
          <Card.Subtitle className="bodysubtitle mb-2 text-muted">
            verb
          </Card.Subtitle>
          <Card.Text className="bodytext">
            <strong>Syllables:</strong> in-ves-ti-gate
          </Card.Text>

          <Card.Text>
            Look up words. Find definitions, related images, examples,
            associated words, slang, even your scrabble score
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else if (apiStatus.success === false) {
    return <TypewriterAlert />;
  } else {
    return (
      <Card style={{ border: "none" }}>
        <Card.Body className="bodycard">
          <Card.Title className="bodytitle">{apiStatus.word}</Card.Title>
          <Card.Subtitle className="bodysubtitle mb-2 text-muted">
            {apiStatus.partOfSpeech}
          </Card.Subtitle>
          <Card.Text className="bodytext">
            <strong>Syllables:</strong> {apiStatus.syllables.join("-")}
          </Card.Text>
          <Card.Text>{apiStatus.definition}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default WordCard;
