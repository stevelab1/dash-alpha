import React from "react";
import SearchPage from "./SearchPage/SearchPage"
import UrbanAPI from '../components/UrbanAPI/UrbanAPI';

const Home = () => {

  return (
    <div>
      <SearchPage />
      <UrbanAPI />
    </div>
  );
};

export default Home;
