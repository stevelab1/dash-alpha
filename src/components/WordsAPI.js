import Axios from 'axios';

function WordsAPI() {
    const APIKEY = '96ffecab55msh5610f9306675572p1e30cbjsn609e7afc48d1';
    const BASEURL = 'wordsapiv1.p.rapidapi.com';

    let wordBreakdown = {};

    // get the definitions, type of word, syllables (for pronounciation) and synonyms, for now just one definition
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
            partOfSpeech: response.data.results[0].partOfSpeech,
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

              // get rhyming words, currently only the first 10 words
              const requestRhyming = {
                method: 'GET',
                url: 'https://wordsapiv1.p.rapidapi.com/words/example/rhymes',
                headers: {
                  'X-RapidAPI-Key': APIKEY,
                  'X-RapidAPI-Host': BASEURL
                }
              };

              Axios.request(requestRhyming).then(function (response) {
                wordBreakdown.rhymes = response.data.rhymes.all.slice(0, 10);

                // remove when finished
                console.log(wordBreakdown);
              }).catch(function (error) {
                console.error(error);
              });
          }).catch(function (error) {
              console.error(error);
          });

      }).catch(function (error) {
          console.error(error);
    });

    return(
      <div></div>
    )
}

export default WordsAPI;
