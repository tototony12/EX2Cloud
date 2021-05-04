const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2020-08-01',
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/2f859a53-7b7f-4d32-afb1-384d016fbe96',
  });

exports.handler = async (event) => {
    
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    
    const analyzeParams = event;
      
      naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
          console.log(JSON.stringify(analysisResults, null, 2));
          return (JSON.stringify(analysisResults, null, 2));
        })
        .catch(err => {
          console.log('error:', err);
          return err;
        });
      
};
