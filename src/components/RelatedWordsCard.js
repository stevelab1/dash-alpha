import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { SearchContext } from "../context/SearchContext";

function generateList(words) {
    return (words.map((item) => {
        return(
            <li key={item}>{item}</li>
        )
    })
    )
}

function RelatedWordsCard() {
  const { apiStatus } = useContext(SearchContext);

  // if there is no api information display nothing
  if (Object.keys(apiStatus).length === 0) {
    return (
      <div></div>
    )
  } else {
    console.log(apiStatus);
    // Otherwise, display the synonyms, antonyms and rhyming words
    return (
      <Card className="related-words-card">
        <Card.Body>
          <Card.Title>Related Words</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
          <Card.Text>{apiStatus.definition}</Card.Text>
            <div className="d-flex flex-row">
                {/* rhymes card */}
                <Card className="rhymes-card">
                    <Card.Body>
                        <Card.Title>Rhyming Words</Card.Title>
                        <ul>
                            {generateList(apiStatus.rhymes)}
                        </ul>
                    </Card.Body>
                </Card>

                {/* synonyms card */}
                <Card className="synonms-card">
                    <Card.Body>
                        <Card.Title>Synonyms</Card.Title>
                        <ul>
                            {generateList(apiStatus.synonyms)}
                        </ul>
                    </Card.Body>
                </Card>

                {/* antonyms card */}
                <Card className="antonyms-card">
                    <Card.Body>
                        <Card.Title>Antonyms</Card.Title>
                        <ul>
                            {generateList(apiStatus.antonyms)}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </Card.Body>
      </Card>
    );
  }
}

export default RelatedWordsCard;
