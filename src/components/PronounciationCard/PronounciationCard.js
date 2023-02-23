import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { Card, Row, Button, Alert } from "react-bootstrap";

import "./PronounciationCard.css";

function PronunciationCard() {
  const { apiStatus } = useContext(SearchContext);
  const [errorMessage, setErrorMessage] = useState(null);

  if (!apiStatus?.phonetics) {
    return null;
  }

  const handleClick = async () => {
    try {
      setErrorMessage(null); // reset error message
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${apiStatus.word}`
      );
      const phonetics = response.data[0]?.phonetics;
      if (!phonetics) {
        throw new Error("Unable to find phonetics for this word.");
      }
      const audioUrl = phonetics[0].audio;
      const audio = new Audio(audioUrl);
      audio.addEventListener("error", () => {
        setErrorMessage("Unable to play audio pronunciation.");
      });
      await audio.play();
    } catch (error) {
      console.error(error);
      setErrorMessage("Unable to load pronunciation. Try another word.");
    }
  };

  return (
    <Row className="mx-0 my-2">
      <Card
        id="pronounciation-card"
        className="col-12 col-lg-12 p-3 mx-auto border-0 text-center text-md-start"
      >
        <Card.Body className="p-0 m-0 col-8">
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly pb-3">
            <div className="syllables col-12 col-md-4 d-flex flex-column justify-content-center">
              <h3 className="pronounce-title m-2 p-0">Ready to pronounce it?</h3>
              <p className="syllable-breakdown m-2 p-0">
                {apiStatus.syllables.join(" - ")}
              </p>
            </div>
            <div className="sound col-12 col-md-4 d-flex justify-content-center align-items-center">
              <Button
                onClick={handleClick}
                variant="outline-dark"
                id="play-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="32"
                  fill="currentColor"
                  className="bi bi-play-btn"
                  viewBox="0 1 24 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                Play
              </Button>
            </div>

            {errorMessage && (
              <Alert variant="warning" className="mx-4 mt-4 border-rounded">
                <p className="px-0 py-2 m-0 border-rounded">{errorMessage}</p>
              </Alert>
            )}
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default PronunciationCard;
