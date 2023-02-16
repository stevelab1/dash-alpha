import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { SearchContext } from "../context/SearchContext";

// APICard renders the data from the given API endpoint
const APICard = ({ apiEndpoint }) => {
  // Get the search input, API status, priority order, and set priority order function from the context
  const { searchInput, apiStatus, priorityOrder, setPriorityOrder } =
    useContext(SearchContext);

  // Define state variables for the data and API status
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Use the useEffect hook to fetch data from the API endpoint when the search input changes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiEndpoint);
        const json = await response.json();
        setApiStatus((prevApiStatus) => ({
          ...prevApiStatus,
          [apiEndpoint]: false,
        }));
        setData(json);
      } catch (error) {
        console.error(`Failed to fetch data from ${apiEndpoint}:`, error);
        setApiStatus((prevApiStatus) => ({
          ...prevApiStatus,
          [apiEndpoint]: true,
        }));
        setError(error);
      }
    }

    fetchData();
  }, [searchInput]);

  // Define the click handlers for the thumb up and thumb down buttons
  const handleThumbUp = () => {
    setPriorityOrder([
      apiEndpoint,
      ...priorityOrder.filter((x) => x !== apiEndpoint),
    ]);
  };

  const handleThumbDown = () => {
    setPriorityOrder([
      ...priorityOrder.filter((x) => x !== apiEndpoint),
      apiEndpoint,
    ]);
  };

  return (
    <div>
      {/* Render an error message if the API call failed */}
      {apiStatus[apiEndpoint] && <p>API call failed</p>}
      {/* Render the Card component if there is data to display */}
      {data && <Card data={data} />}
      {/* Render the thumb up and down buttons */}
      <button onClick={handleThumbUp}>Thumb up</button>
      <button onClick={handleThumbDown}>Thumb down</button>
    </div>
  );
};

export default APICard;
