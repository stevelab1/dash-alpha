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
            
            {/* synonyms card */}
            <Card className="synonms-card">
                <Card.Body>
                    <Card.Title>Synonyms</Card.Title>
                    <ul>
                        {generateList(apiStatus.synonyms)}
                    </ul>
                </Card.Body>
            </Card>

        </Card.Body>
      </Card>
    );
  }
}

export default RelatedWordsCard;
