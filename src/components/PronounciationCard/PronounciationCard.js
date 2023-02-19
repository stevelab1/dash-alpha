import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

function PronunciationCard() {
  const { apiStatus } = useContext(SearchContext);

  // If phonetics data is not available for the searched word, do not display this card
  if (!apiStatus.phonetics) {
    return null;
  }

  const playAudio = async (audioUrl) => {
    const audio = new Audio(audioUrl);
    await audio.play();
  }

  const getAudioUrl = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${apiStatus.word}`);
      const audioUrl = response.data[0].phonetics[0].audio;
      return audioUrl;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return (
    <div className="card mb-4">
      <div className="card-header">Pronunciation</div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={async () => {
          const audioUrl = await getAudioUrl();
          if (audioUrl) {
            playAudio(audioUrl);
          }
        }}>
          Play Audio
        </button>
      </div>
    </div>
  );
}

export default PronunciationCard;
