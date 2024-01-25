//OBJECT DESTRUCTURING
// Faça uma função que receba um objeto representando um animal 
// e retorn uma string contendo seu nome e sua massa.


const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

//Lion (Panthera leo) weighs around 186.55-225 kg
const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg',
    prof: "Zeze"
  }
};
// Faça uma função que receba um objeto representando um animal 
// e retorn uma string contendo seu nome e sua massa.
//'Lion (Panthera leo) weighs around 186.55-225 kg'

const animalDescription = (animal) => {
  const {commonName, name, weightRange:{min, max, measurementUnit = "kg"}} = animal;
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
}

console.log(animalDescription(blueWhale));
console.log(animalDescription(polarBear));

module.exports = { animalDescription, lion, blueWhale, polarBear };