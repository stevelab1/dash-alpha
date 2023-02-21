import React, { useContext, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import WordCard from "../components/WordCard";
import Scrabble from "../components/scrabble/Scrabble";
import { calculateScrabbleScore } from "../utils/scrabbleUtils";

import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import RelatedWordsCard from "../components/RelatedWordsCard/RelatedWordsCard";
import PronounciationCard from "../components/PronounciationCard/PronounciationCard";
import Picture from "../components/Picture";
import ExamplesBackgroundCard from "../components/ExamplesBackgroundCard/ExamplesBackgroundCard";
import "../pages/searchPage.css";

function SearchPage() {
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedWord, setSearchedWord] = useState("");
  const [scrabbleScore, setScrabbleScore] = useState(0);

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

        // Extract the phonetics data from the API response
        const phonetics = response.data?.pronunciation?.all || "";

        // Set the apiStatus state variable with the response data
        setApiStatus({
          word: response.data.word,
          definition: response.data.results[0].definition,
          partOfSpeech: response.data.results[0].partOfSpeech,
          syllables: response.data.syllables.list,
          synonyms: response.data.results[0].synonyms,
          antonyms: antonymsResponse.data.antonyms,
          rhymes: rhymesResponse.data.rhymes.all.slice(0, 10),
          phonetics: phonetics,
          success: true,
          error: false,
        });

        // Set the searched word
        setSearchedWord(searchInput);

        // Calculate the Scrabble score for the searched word
        setScrabbleScore(calculateScrabbleScore(searchInput));
      } catch (error) {
        // If there is an error, still set the searched word to the search input, and calculate the Scrabble score for it
        setSearchedWord(searchInput);
        setScrabbleScore(calculateScrabbleScore(searchInput));

        // Set the apiStatus state variable to indicate the error
        setApiStatus({
          word: "",
          definition: "",
          partOfSpeech: "",
          syllables: [],
          synonyms: [],
          antonyms: [],
          rhymes: [],
          phonetics: null,
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
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter a word"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
              style={{
                position: "relative",
                width: "100px",
                padding: "5px 35px 5px 18px",
              }}
            >
              {isLoading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 7,
                    bottom: 0,
                    margin: "auto",
                  }}
                />
              )}
              Search
            </Button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div>
      <Hero>
        <SearchForm setSearchError={setSearchError} />
      </Hero>
      <div className="shadow p-2 mb-2 bg-white">
        <div className="card-container container mt-5">
          <div className="row">
            <div className="col-md-6">
              <WordCard searchError={searchError}/>
            </div>
            <div className="col-md-6">
              <Picture word={searchedWord} />
            </div>
          </div>
        </div>
      </div>
      <Scrabble word={searchedWord} />
      <RelatedWordsCard />
      <PronounciationCard />
      <ExamplesBackgroundCard />
    </div>
  );
}

export default SearchPage;
