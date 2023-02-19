import React from "react";

function PronounciationCard() {
  

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
