import React, { useContext, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import WordCard from "../components/WordCard";

import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import Hero from "../components/Hero/Hero";

function SearchPage() {
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function SearchForm() {
    const { searchInput, setSearchInput, setApiStatus } =
      useContext(SearchContext);

    const handleSearch = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
        // Make an API call to get the word breakdown
        const response = await axios.get(
          `https://wordsapiv1.p.rapidapi.com/words/${searchInput}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1",
              "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
            },
          }
        );

        // Get antonyms
        const antonymsResponse = await axios.get(
          `https://wordsapiv1.p.rapidapi.com/words/${searchInput}/antonyms`,
          {
            headers: {
              "X-RapidAPI-Key":
                "96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1",
              "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
            },
          }
        );

        // Get rhyming words
        const rhymesResponse = await axios.get(
          `https://wordsapiv1.p.rapidapi.com/words/${searchInput}/rhymes`,
          {
            headers: {
              "X-RapidAPI-Key":
                "96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1",
              "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
            },
          }
        );

        // Set the apiStatus state variable with the response data
        setApiStatus({
          word: response.data.word,
          definition: response.data.results[0].definition,
          partOfSpeech: response.data.results[0].partOfSpeech,
          syllables: response.data.syllables.list,
          synonyms: response.data.results[0].synonyms,
          antonyms: antonymsResponse.data.antonyms,
          rhymes: rhymesResponse.data.rhymes.all.slice(0, 10),
          success: true,
          error: false,
        });
      } catch (error) {
        // If there is an error, display it to the user
        setApiStatus({
          word: "",
          definition: "",
          partOfSpeech: "",
          syllables: [],
          synonyms: [],
          antonyms: [],
          rhymes: [],
          success: false,
          error: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter a word"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
           <Button
  type="submit"
  variant="primary"
  disabled={isLoading}
  style={{ position: 'relative', width: '100px', padding: '5px 35px 5px 18px' }}
>
  {isLoading && (
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
      style={{ position: 'absolute', top: 0, right: 7, bottom: 0, margin: 'auto' }}
    />
  )}
  Search
</Button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Hero>
        <SearchForm setSearchError={setSearchError} />
      </Hero>
      <WordCard searchError={searchError} />
    </div>
  );
}

export default SearchPage;
