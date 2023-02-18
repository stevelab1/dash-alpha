import Axios from 'axios';

function WordDictionaryAPI() {

    const APIKEY = '96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1';
    const BASEURL = 'twinword-word-graph-dictionary.p.rapidapi.com';

    const requestExample = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/example/',
        params: {entry: 'example'},
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': BASEURL
        }
    };
      
    Axios.request(requestExample).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
    });

    return (
        <div></div>
    )
}

export default WordDictionaryAPI;

