
import Axios from 'axios';

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

    Axios.request(options).then(function (response) {
        console.log(response.data.list[0].definition);
        console.log(response.data.list[0].example);

    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>
        </div>
    )

};
export default urbanAPI;

