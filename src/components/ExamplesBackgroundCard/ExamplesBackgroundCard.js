import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

// import "./RelatedWordsCard.css";

function generateList(words) {
  return words.map((item) => {
    return (
      <li className="list-group-item border-0 text-start" key={item}>
        {item}
      </li>
    );
  });
}

function ExamplesCard() {
  const { apiStatus } = useContext(SearchContext);

  // If there is background information then add a class to display it, otherwise add a class to hide it
  let displayBackground = "invisible";
  apiStatus.background ? displayBackground = "visible" : displayBackground = 'invisible';

  // if there is no api information display nothing
  if (Object.keys(apiStatus).length === 0) {
    return <div></div>;
  } else {
    // Otherwise, display the examples
    return (
      <Row className="mx-0 my-2">
        <Card className="examples-background-card col-12 col-lg-12 p-3 mx-auto border-0">
          <Card.Body className="p-0 m-0">
            <div>
                <Card className="examples-card">
                  <Card.Body>
                    <Card.Title className="text-start">Use {apiStatus.word} in a sentence</Card.Title>
                      <ul>
                        {/* {generateList(apiStatus.examples)} */}
                        {generateList(['This is an example sentence for testing.','This is another example sentence.', 'But these sentences are purely for testing.', 'The line above this in the code is the real line when the api call has been added in'])}
                      </ul>
                  </Card.Body>
                </Card>

                <Card className={`background-card ${displayBackground}`}>
                  <Card.Body>
                    <Card.Title className="text-start">Background of the word {apiStatus.word}</Card.Title>
                      <Card.Text>
                        {apiStatus.background}
                      </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default ExamplesCard;
