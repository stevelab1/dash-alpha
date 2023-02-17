import React from "react";
import Hero from "../components/Hero/Hero";
import WordsAPI from '../components/WordsAPI';

const Home = () => {
  return (
    <div className="home" 
    // data-test="home-page"
    >
      <Hero />
      <WordsAPI />
    </div>
  );
};

export default Home;
