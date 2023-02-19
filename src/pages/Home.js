import React from "react";
import SearchPage from "./SearchPage"
import UrbanAPI from '../components/UrbanAPI';
import UrbanCard from "../components/UrbanCard";

const Home = () => {

  return (
    <div>
      <SearchPage />
      <UrbanAPI />
      <UrbanCard />
    

    </div>
  );
};

export default Home;
