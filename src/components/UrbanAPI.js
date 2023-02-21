import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchContext } from "../context/SearchContext";

import { Card } from "react-bootstrap";
import React, { useContext } from 'react';
import "../components/UrbanAPI.css";

// Create a new context
//export const SearchContext = createContext({});


function UrbanAPI() {
    const { searchInput } =
        useContext(SearchContext);

    const [urban, setUrban] = useState({
        definition: '',
        example: '',
    })
    // useEffect(
        //() => {
            const options = {
                method: 'GET',
                url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',

                params: {
                    term: searchInput
                },
                headers: {
                    'X-RapidAPI-Key': '662923c1d1msh2601dffd22e156dp13e20ejsn70d788d09664',
                    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data.list[0].definition);
                console.log(response.data.list[0].example);
                setUrban({
                    definition: response.data.list[0].definition,
                    example: response.data.list[0].example,
                })

            })
            // .catch(function (error) {
            //     console.error(error);
            // });
        //}, 
    //     [
    //     searchInput
    // ]
 //console.log({urban,definition})
//             def = def.replace(/[]/g, '');
//             console.log(def);
//             const eg = {urban.example}

    //)
    return (
        <div>
            <Card className="urbanAPI">
                <Card.Body>
                    <Card.Title >Urban-dictionary definition</Card.Title>
                    <Card.Text>
                        <p>{urban.definition}</p>
                        Example: {urban.example}
                    </Card.Text>
                    {/* link not working because of some syntax error, so I put "example" instead of {searchInput}*/}
                    <Card.Link href={`https://www.urbandictionary.com/define.php?term=${searchInput}`}>Learn more</Card.Link>

                </Card.Body>
            </Card>
        </div>
    )
    // <div className="urban">
    //     <h2>{urban.definition}</h2>
    //     <h3>{urban.example}</h3>
    // </div>
    //)
};
export default UrbanAPI;

