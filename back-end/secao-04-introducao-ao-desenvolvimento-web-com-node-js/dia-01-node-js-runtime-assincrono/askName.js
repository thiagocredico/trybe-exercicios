const readline = require('readline-sync');

const askName = () => readline.question('Digite o nome? ');

module.exports = askName;
