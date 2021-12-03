// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, funcToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    
    if (!error) return funcToRunWhenThingsAreDone(data);
  });
  
};

const printOutCatBreed = breed => {
  console.log('return value -->', breed)
}

breedDetailsFromFile('Bombay', printOutCatBreed)