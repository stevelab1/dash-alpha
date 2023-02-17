
import axios from 'axios';
// const axios = require("axios");
function urbanAPI() {
    const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: {
            term: "bruv"
        },
        headers: {
            'X-RapidAPI-Key': '662923c1d1msh2601dffd22e156dp13e20ejsn70d788d09664',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
    //console.log(response);
    //const response = response
    return (
<div>

</div>
    )
        // id: 'urbanWord',
        // definition: list[0].definition,
        // example: response[0].example,
    
        
};
export default urbanAPI;

