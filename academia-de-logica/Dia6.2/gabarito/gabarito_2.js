// Gabarito - Exercício 2
const charsOfEachFamily = (chars) => {
  const lineage = {};

  for (let char of chars) {
    if (Object.keys(lineage).includes(char.family)) {
      lineage[char.family].push(char.fullName);
    } else {
      lineage[char.family] = [char.fullName];
    }
  }

  return lineage;
};

const gameOfThronesCharacters = [
  {
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    fullName: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    family: 'House Targaryen',
  },
  {
    firstName: 'Brienne',
    lastName: 'Tarth',
    fullName: 'Brienne of Tarth',
    title: 'Lady Brienne',
    family: 'Tarth',
  },
  {
    firstName: 'Jon',
    lastName: 'Snow',
    fullName: 'Jon Snow',
    title: 'King of the North',
    family: 'House Stark',
  },
  {
    firstName: 'Arya',
    lastName: 'Stark',
    fullName: 'Arya Stark',
    title: 'No One',
    family: 'House Stark',
  },
];

console.log(charsOfEachFamily(gameOfThronesCharacters));
