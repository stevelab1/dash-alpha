import { useState, useEffect, useContext} from 'react';
import Axios from 'axios';
import { SearchContext } from "../context/SearchContext";



function UrbanAPI() {
    const { searchInput, setSearchInput, setApiStatus } =
      useContext(SearchContext);
      console.log(searchInput);
const [urban, setUrban]= useState({
    definition : '',
    example:'',
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
setUrban ({
    definition: response.data.list[0].definition,
    example: response.data.list[0].example,
}) 

    }).catch(function (error) {
        console.error(error);
    });
},[
    searchInput
]
) 
    return (
        <div id="urban">
            <h3> {urban.definition}</h3>
            <h4>{urban.example}</h4>
        </div>
    )
};
export default UrbanAPI;

