//OBJECT DESTRUCTURING
// Extraia as informações de name e birthplace do objeto para montar uma frase!
const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

//************* DOT NOTATION ************

// const name = richestDuckInTheWorld.name;
// const birthplace = richestDuckInTheWorld.birthplace
// console.log(richestDuckInTheWorld.name, richestDuckInTheWorld.birthplace);

//******** OBJECT DESESTRUCTURING *******

const {job, name, birthplace} = richestDuckInTheWorld;
console.log(job, name, birthplace);


module.exports = {name, birthplace}