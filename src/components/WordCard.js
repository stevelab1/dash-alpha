import React, { useContext } from "react";
import { Card, Alert } from "react-bootstrap";
import { SearchContext } from "../context/SearchContext";

function WordCard({ searchError }) {
  const { apiStatus } = useContext(SearchContext);

  if (searchError) {
    // If there is a search error, display the error message in a yellow alert
    return (
      <Alert variant="warning" className="mt-3">
        {searchError}
      </Alert>
    );
  } else if (Object.keys(apiStatus).length === 0) {
    // If there is no data yet, display a message to the user in a blue alert
    return (
      <Alert variant="primary" className="mt-3">
        Please enter a search term above.
      </Alert>
    );
  } else if (apiStatus.success === false) {
    // If the API call was not successful, display an error message in a red alert
    return (
      <Alert variant="danger" className="mt-3">
        No results for your search. Please try another word.
      </Alert>
    );
  } else {
    // Otherwise, display the word breakdown
    return (
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title>{apiStatus.word}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {apiStatus.partOfSpeech}
          </Card.Subtitle>
          <Card.Text>{apiStatus.definition}</Card.Text>
          <Card.Text>
            <strong>Syllables:</strong> {apiStatus.syllables.join("-")}
          </Card.Text>
          {/* <Card.Text>
            <strong>Synonyms:</strong> {apiStatus.synonyms.join(", ")}
          </Card.Text>
          <Card.Text>
            <strong>Antonyms:</strong> {apiStatus.antonyms.join(", ")}
          </Card.Text>
          <Card.Text>
            <strong>Rhyming words:</strong> {apiStatus.rhymes.join("-")}
          </Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}

export default WordCard;
