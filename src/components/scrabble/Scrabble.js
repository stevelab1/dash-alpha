import React from "react";
import Card from "react-bootstrap/Card";
import "../scrabble/scrabble.css";

const Scrabble = ({ word }) => {
  // Define the point values for each letter in Scrabble
  const letterValues = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  // Calculate the Scrabble score for the current word
  const calculateScore = (word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toUpperCase();
      score += letterValues[letter] || 0;
    }
    return score;
  };

  // Calculate the score for the current word
  const score = calculateScore(word);

  // Define the list of letter scores as an array of objects
  const letterScores = word.split("").map((letter, index) => ({
    letter,
    score: letterValues[letter.toUpperCase()] || 0,
  }));

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="text-center scrabble-container">
          <h2>Your Scrabble Score is: {score}</h2>
          <div className="row">
            {letterScores.map((letterScore, index) => (
              <div className="col-3 col-md-3 col-lg-2" key={index}>
                <Card className="scrabble-tile">
                  <div className="text-center">
                    <div className="scrabble-tile-letter">{letterScore.letter}</div>
                    <div className="scrabble-tile-score">{letterScore.score}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
);
};

export default Scrabble;
