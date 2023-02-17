import React from "react";
import SearchPage from "./SearchPage"
import DictionaryAPI from '../components/DictionaryAPI';
import WordsAPI from '../components/WordsAPI';

const Home = () => {
  return (
    <div>
      <SearchPage />
      <DictionaryAPI />
    </div>
  );
};

export default Home;
