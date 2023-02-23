import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchContext } from "../context/SearchContext";
import { Card } from "react-bootstrap";
import React, { useContext } from 'react';
import "./UrbanAPI.css";

function UrbanAPI() {
    const { searchInput } =
        useContext(SearchContext);
    const [urban, setUrban] = useState({
        definition: '',
        example: '',
    });
    console.log(searchInput)
    useEffect(
        () => {
            const options = {
                method: 'GET',
                url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
                params: {
                    term: searchInput
                },
                headers: {
                    'X-RapidAPI-Key': '662923c1d1msh2601dffd22e156dp13e20ejsn70d788d09664',
                    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
                }}
            axios.request(options).then(function (response) {
                console.log(response.data.list[0].definition);
                console.log(response.data.list[0].example);
                setUrban({
                    definition: response.data.list[0].definition,
                    example: response.data.list[0].example,
                })
            }            ).catch(function (error) {
                console.error(error);
            })
        })
    return (
        <div>
            {searchInput && <Card className="urbanAPI">
                <Card.Body>
                    <Card.Title><strong className='strong-title'>Urban-dictionary definition</strong></Card.Title>
                    <Card.Text>
                        <p>{urban.definition}</p>
                        Example: {urban.example}
                    </Card.Text>
                    <Card.Link href={`https://www.urbandictionary.com/define.php?term=${searchInput}`}>Learn more</Card.Link>
                </Card.Body>
            </Card>
            }
        </div>
    )
}
export default UrbanAPI;