import { useState, useEffect } from "react";
import axios from "axios";
import { SearchContext } from "../context/SearchContext";

import { Card } from "react-bootstrap";
import React, { useContext } from "react";
import "../components/UrbanAPI.css";

function UrbanAPI() {
  const { searchInput } = useContext(SearchContext);

  const [urban, setUrban] = useState({
    definition: "",
    example: "",
  });
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",

      params: {
        term: searchInput,
      },
      headers: {
        "X-RapidAPI-Key": "662923c1d1msh2601dffd22e156dp13e20ejsn70d788d09664",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setUrban({
          definition: response.data.list[0].definition,
          example: response.data.list[0].example,
        });
      })
      .catch(function (error) {});
  }, [searchInput]);
  return (
    <div>
      <Card className="urbanAPI">
        <Card.Body>
          <Card.Title>Urban-dictionary definition</Card.Title>

          <Card.Text>
            {urban.definition}
            <br></br>
            Example: {urban.example}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default UrbanAPI;
