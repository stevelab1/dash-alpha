import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

import "./ExamplesBackgroundCard.css";

// function generateList(words) {
//   return words.map((item) => {
//     return (
//       <li className="list-group-item border-0 text-start" key={item}>
//         {item}
//       </li>
//     );
//   });
// }

function ExamplesCard() {
  const { apiStatus } = useContext(SearchContext);

  // If there is background information then add a class to display it, otherwise add a class to hide it
  let displayBackground;
  let displayExamples;
  if (apiStatus.background) {
    displayBackground = "d-block";
    displayExamples = "col-lg-5";
  } else {
    displayBackground = "d-none";
    displayExamples = "col-lg-7 mx-auto";
  }

  // if there is no api information display nothing
  if (Object.keys(apiStatus).length === 0) {
    return <div></div>;
  } else {
    // Otherwise, display the examples
    return (
      <Row className="mx-0 my-2">
        <Card className="examples-background-card col-12 p-3 mx-auto border-0">
          <Card.Body className="p-0 m-0">
            <div className="d-flex flex-column flex-lg-row justify-content-evenly">
              {/* examples card */}
              <Card
                className={`examples-card col-12 my-2 border-0 ${displayExamples}`}
              >
                <Card.Body>
                  <Card.Title className="p-0 mb-3 text-start">
                    Use {apiStatus.word} in a sentence
                  </Card.Title>
                  <ul className="list-group">
                    {/* {generateList(apiStatus.examples)} */}
                  </ul>
                </Card.Body>
              </Card>

              <div
                className={`divider border-top border-bottom border-start border-end ${displayBackground}`}
              ></div>

              {/* background card */}
              <Card
                className={`background-card col-12 col-lg-5 my-2 ${displayBackground}`}
              >
                <Card.Body>
                  <Card.Title className="text-start p-0 mb-3">
                    Background of the word {apiStatus.word}
                  </Card.Title>
                  <Card.Text>{apiStatus.background}</Card.Text>
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
