import React from 'react';

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

  // Define the table rows for the letters in the word and their values
  const wordRows = word.split('').map((letter, index) => (
    <tr key={index}>
      <td>{letter}</td>
      <td>{letterValues[letter.toUpperCase()] || 0}</td>
    </tr>
  ));

  return (
    <div>
      <h3>Scrabble Score for "{word}": {score}</h3>
      <table>
        {/* <thead>
          <tr>
            <th>Letter</th>
            <th>Value</th>
          </tr>
        </thead> */}
        <tbody>
          {wordRows}
        </tbody>
      </table>
    </div>
  );
};

export default Scrabble;