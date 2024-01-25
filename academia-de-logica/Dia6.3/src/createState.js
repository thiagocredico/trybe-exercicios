const validateStates = (state, inicials, capital, population)=> {
  if (!state || !inicials || !capital || !population) {
    throw new Error('Preencha todos os campos para criar sua cidade!');
  }
}

const createState = (state, inicials, capital, population) => {
  try {
    validateStates(state, inicials, capital, population);
    return `Bem-vindo ao estado ${state}-${inicials}, nossa capital ${capital} possui ${population} pessoas`;
  } catch (error) {
    return error.message;
  }
};

console.log(createState('Caduverso', 'CV', 'Caduversolandia', 137921852));

module.exports = createState;
