import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

import "./PronounciationCard.css";

// function generateList(words) {
//   return words.map((item) => {
//     return (
//       <li className="list-group-item border-0" key={item}>
//         {item}
//       </li>
//     );
//   });
// }

function RelatedWordsCard() {
  const { apiStatus } = useContext(SearchContext);

  // if there is no api information display nothing
  if (Object.keys(apiStatus).length === 0) {
    return <div></div>;
  } else {
    // Otherwise, display the synonyms, antonyms and rhyming words
    return (
      <Row className="mx-0 my-2">
        <Card className="pronounciation-card col-12 col-lg-12 p-3 mx-auto border-0">
          <Card.Body className="p-0 m-0">
          <div className="d-flex flex-column flex-md-row justify-content-evenly pb-3">
            <div className="syllables">
              <h5>Ready to pronounce it?</h5>
              
            </div>
            <div className="sound">

            </div>
          </div>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default RelatedWordsCard;
