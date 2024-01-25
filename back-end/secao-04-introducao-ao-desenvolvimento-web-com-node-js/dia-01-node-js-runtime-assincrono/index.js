const askName = require('./askName');
const { getPackage } = require('./getPackageNpm');

const main = async () => {
  const name = askName();

  const project = await getPackage(name);

  if (!project) {
    console.log(`O projeto ${name} não é um pacote NPM`)
  } else {
    console.log(`O projeto ${name} é um pacote NPM`)
  }
  
};

main();
