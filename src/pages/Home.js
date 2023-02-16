import React from "react";
import Hero from "../components/Hero";
import WordsAPI from '../components/WordsAPI';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WordsAPI />
    </div>
  );
};

export default Home;