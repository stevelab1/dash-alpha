import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { Card, Row, Button } from "react-bootstrap";

function PronunciationCard() {
  const { apiStatus } = useContext(SearchContext);

  if (!apiStatus?.phonetics) {
    return null;
  }

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${apiStatus.word}`
      );
      const audioUrl = response.data[0].phonetics[0].audio;
      const audio = new Audio(audioUrl);
      await audio.play();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row className="mx-0 my-2">
      <Card className="pronunciation-card col-12 col-lg-12 p-3 mx-auto border-0 text-center text-md-start">
        <Card.Body className="p-0 m-0">
          <div className="d-flex flex-column flex-md-row justify-content-center pb-3">
            <div className="syllables col-12 col-md-4 d-flex flex-column justify-content-center">
              <h3 className="m-2 p-0">Ready to pronounce it?</h3>
              <p className="syllable-breakdown m-2 p-0">
                {apiStatus.syllables.join(" - ")}
              </p>
            </div>
            <div className="sound col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <Button onClick={handleClick} variant="outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-play-btn"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>{" "}
                Play
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default PronunciationCard;
