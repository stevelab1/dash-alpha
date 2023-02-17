// import React from "react";
// import Hero from "../components/Hero/Hero";
// import WordsAPI from '../components/WordsAPI';

// const Home = () => {
//   return (
//     <div className="home" data-test="home-page">
//       <Hero />
//       <WordsAPI />
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import Hero from "../components/Hero/Hero";
// import WordsAPI from "../components/WordsAPI";
// import Scrabble from "../components/Scrabble";

// const Home = () => {
//   const handleSearch = (searchInput) => {
//     console.log(searchInput);
//   };

//   return (
//     <div className="home" data-test="home-page">
//       <Hero />
//       <WordsAPI />
//       <Scrabble word="words" />
//     </div>
//   );
// };

// export default Home;

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
