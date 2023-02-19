import React from "react";
import SearchPage from "./SearchPage"
import UrbanAPI from '../components/UrbanAPI';

const Home = () => {
  return (
    <div>
      <SearchPage />
      <UrbanAPI />
    </div>
  );
};

export default Home;
