import Axios from 'axios';

function WordDictionaryAPI() {
    // to get example sentences for a word, currently grabbing two examples

    const APIKEY = '96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1';
    const BASEURL = 'twinword-word-graph-dictionary.p.rapidapi.com';

    let wordBreakdown = {};

    const requestExample = {
        method: 'GET',
        // this url the end word must be example, its not the word we're looking up
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/example/',
        // this is there word we are looking up:
        params: {entry: 'example'},
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': BASEURL
        }
    };
      
    Axios.request(requestExample).then(function (response) {
          // for now just three examples
          wordBreakdown.examples = [response.data.example[0],response.data.example[1],response.data.example[2]]

          // remove when finished
          console.log(wordBreakdown);
        }).catch(function (error) {
          console.error(error);
    });

    return (
        <div></div>
    )
}

export default WordDictionaryAPI;

