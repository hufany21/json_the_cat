const request = require('request');
const breedName = process.argv.slice(2);


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    const description = data.length > 0 ? data[0]['description'] : null;
    
    
    
    callback(error, description);
  });
};


module.exports = { fetchBreedDescription };