import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { SearchContext } from '../context/SearchContext';
import axios from 'axios';

function SearchForm() {
  const { searchInput, setSearchInput, setApiStatus } = useContext(SearchContext);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      // Make an API call to get the word breakdown
      const response = await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${searchInput}`, {
        headers: {
          'X-RapidAPI-Key': '96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        },
      });

      // Set the apiStatus state variable with the response data
      setApiStatus(response.data);
    } catch (error) {
      // If there is an error, display it to the user
      setSearchError('There was an error with your search. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter a word" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      <p>{searchError}</p>
    </div>
  );
}

function WordCard() {
  const { apiStatus } = useContext(SearchContext);

  if (Object.keys(apiStatus).length === 0) {
    // If there is no data yet, display a message to the user
    return <p>Please enter a search term above.</p>;
  } else if (apiStatus.success === false) {
    // If the API call was not successful, display an error message
    return <p>There was an error with your search. Please try again.</p>;
  } else {
    // Otherwise, display the word breakdown
    return (
      <Card>
        <Card.Body>
          <Card.Title>{apiStatus.word}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{apiStatus.results[0].partOfSpeech}</Card.Subtitle>
          <Card.Text>{apiStatus.results[0].definition}</Card.Text>
          {/* <Card.Text>
            <strong>Syllables:</strong> {apiStatus.syllables.list.join('-')}
          </Card.Text>
          <Card.Text>
            <strong>Synonyms:</strong> {apiStatus.results[0].synonyms.join(', ')}
          </Card.Text>
          <Card.Text>
            <strong>Antonyms:</strong> {apiStatus.antonyms.join(', ')}
          </Card.Text>
          <Card.Text>
            <strong>Rhyming words:</strong> {apiStatus.rhymes.join(', ')}
          </Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}

export default function SearchPage() {
  return (
    <div>
      <SearchForm />
      <WordCard />
    </div>
  );
}
