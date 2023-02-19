import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function PronounciationCard() {
  const { apiStatus } = useContext(SearchContext);

  // If phonetics data is not available for the searched word, do not display this card
  if (!apiStatus.phonetics) {
    return null;
  }

  // const audioUrl = apiStatus.phonetics;

  return (
    <div className="card mb-4">
      <div className="card-header">Pronunciation</div>
      <div className="card-body">
        <audio controls>
          <source
            src={`https://api.dictionaryapi.dev/media/pronunciations/en/test-uk.mp3`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default PronounciationCard;
