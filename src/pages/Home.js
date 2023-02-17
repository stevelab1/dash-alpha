import React from "react";
import SearchPage from "./SearchPage"
import DictionaryAPI from '../components/DictionaryAPI';

const Home = () => {
  return (
    <div>
      <SearchPage />
      <DictionaryAPI />
    </div>
  );
};

export default Home;
