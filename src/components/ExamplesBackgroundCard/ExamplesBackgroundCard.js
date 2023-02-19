import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

// import "./RelatedWordsCard.css";

// function generateList(words) {
//   return words.map((item) => {
//     return (
//       <li className="list-group-item border-0" key={item}>
//         {item}
//       </li>
//     );
//   });
// }

function ExamplesCard() {
  const { apiStatus } = useContext(SearchContext);

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
                    <Card.Title>Use {apiStatus.word} in a sentence</Card.Title>
                </Card>
            </div>
            
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default ExamplesCard;
