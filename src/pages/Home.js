import React from "react";
import SearchPage from "./SearchPage"
import DictionaryAPI from '../components/DictionaryAPI';
import WordsAPI from '../components/WordsAPI';
import WordDictionaryAPI from '../components/WordDictionaryAPI';

const Home = () => {
  return (
    <div>
      <SearchPage />
      {/* <DictionaryAPI /> */}
      <WordDictionaryAPI />
    </div>
  );
};

export default Home;
