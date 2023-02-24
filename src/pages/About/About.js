import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1 className="title">Investig8 Word Search</h1>

        <h2>Look up words.</h2>
        <h3>For learners, travelers, and logophiles.</h3>
        <p className="description">
          Investig8 word search is a quick, convenient, free, educational, and
          entertaining one-stop info page explaining the ins and outs of every
          word in the English language.
        </p>
        <ul className="features">
          <li>
            Just looking for a definition? It'll be the first line you get after
            your search.
          </li>
          <li>
            You're trying to understand some slang? Just scroll down to find the
            definition from the urban dictionary.
          </li>
          <li>
            Want to see how a word can be broken down into syllables or what
            rhymes with it? We have you covered. 😉
          </li>
          <li>
            Or maybe you're just looking for some synonyms or antonyms for your
            writing? We've got whole lists of them!
          </li>
        </ul>
        <p>
          Whether you are fascinated by the English Language and would love to
          know all about spoken and written English all around the world, or you
          think the short complicated definitions in a dictionary aren't good
          enough, the Investig8 word search is just for you!
        </p>
      </div>
    </div>
  );
};

export default About;
