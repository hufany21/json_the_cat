const request = require('request');
const breedName = process.argv.slice(2);



request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (body === '[]') {
    console.log('Error, this breed was not found');
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0]['description']);

});
