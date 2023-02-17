import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import WordsAPI from '../components/WordsAPI';
import Scrabble from '../components/Scrabble';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchInput) => {
    setSearchTerm(searchInput);
  };

  return (
    <div className="home" data-test="home-page">
      <Hero onSearch={handleSearch} />
      <WordsAPI />
      {searchTerm && <Scrabble word={searchTerm} />}
    </div>
  );
};

export default Home;