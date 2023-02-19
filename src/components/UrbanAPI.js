import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { SearchContext } from "../context/SearchContext";
import { Card, Alert, Container } from "react-bootstrap";




function UrbanAPI() {
    const { searchInput, setSearchInput, setApiStatus } =
        useContext(SearchContext);
    //console.log(searchInput);
    const [urban, setUrban] = useState({
        definition: '',
        example: '',
    })
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
                    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
                }
            };

            Axios.request(options).then(function (response) {
                console.log(response.data.list[0].definition);
                console.log(response.data.list[0].example);
                setUrban({
                    definition: response.data.list[0].definition,
                    example: response.data.list[0].example,
                })

            }).catch(function (error) {
                console.error(error);
            });
        }, [
        searchInput
    ]
    )
    return (
        <div id="urban">


            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Urban-dictionary definition</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        {urban.definition}
                        {urban.example}
                    </Card.Text>
                    <Card.Link href="https://www.urbandictionary.com/define.php?term={searchInput}">Read more</Card.Link>

                </Card.Body>
            </Card>

        </div>
    )
};
export default UrbanAPI;

