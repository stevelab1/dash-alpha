import React from "react";
import WordsAPI from "../data/testwordsAPI";

function APITest() {
  const word = "example"; // or get the word from user input or elsewhere
  const [results, setResults] = React.useState(null);

  React.useEffect(() => {
    const getWordBreakdown = async () => {
      const wordBreakdown = await WordsAPI(word);
      setResults(wordBreakdown);
    };

    getWordBreakdown();
  }, [word]);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <p>Word: {results.word}</p>
      <p>Definition: {results.definition}</p>
      <p>Parts of Speech: {results.partsOfSpeech}</p>
      <p>Syllables: {results.syllables.join(", ")}</p>
      <p>Synonyms: {results.synonyms.join(", ")}</p>
      {results.antonyms && <p>Antonyms: {results.antonyms.join(", ")}</p>}
    </div>
  );
}

export default APITest;
