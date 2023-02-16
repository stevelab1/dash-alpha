import Axios from 'axios';

function WordsAPI() {
    const APIKEY = '96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1';
    const BASEURL = 'wordsapiv1.p.rapidapi.com';

    let wordBreakdown = {};

    // get the definitions, type of word, syllables (for pronounciation) and synonyms
    const requestWord = {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/example`,
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': BASEURL
        }
      };
      
      Axios.request(requestWord).then(function (response) {
          wordBreakdown = {
            word: 'example',
            definition: response.data.results[0].definition,
            partsOfSpeech: response.data.results[0].partsOfSpeech,
            syllables: response.data.syllables.list,
            synonyms: response.data.results[0].synonyms,
          }

          // get antonyms
          const requestAntonyms = {
            method: 'GET',
            url: 'https://wordsapiv1.p.rapidapi.com/words/example/antonyms',
            headers: {
              'X-RapidAPI-Key': APIKEY,
              'X-RapidAPI-Host': BASEURL
            }
          };
          
          Axios.request(requestAntonyms).then(function (response) {
              wordBreakdown.antonyms = response.data.antonyms;
          }).catch(function (error) {
              console.error(error);
          });

          console.log(wordBreakdown);
      }).catch(function (error) {
          console.error(error);
    });

    return(
      <div></div>
    )
}

export default WordsAPI;
