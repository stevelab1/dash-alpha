import Axios from 'axios';

function DictionaryAPI() {
    const requestWord = {
        method: 'GET',
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/example',
    };

    Axios.request(requestWord).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div></div>
    )
}



export default DictionaryAPI;