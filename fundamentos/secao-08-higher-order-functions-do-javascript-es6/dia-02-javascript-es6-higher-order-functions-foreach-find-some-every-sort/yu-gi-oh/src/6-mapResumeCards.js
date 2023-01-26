// const { types } = require('../database');
const data = require('../database');

//A partir dos 3 arrays cards, types e attributes,
//a função resumeInfo deve retornar um array de objetos,
// com as seguintes propriedades:
// {
//   nome: nomeDaCarta,
//   tipo: nomeDoTipo,
//   atributo: nomeDoAtributo,
// }

const resumeInfo = () => {
  const lariYugi = data.cards.map((card) => {
    const getType = data.types.find((type)=> type.id === card.typeId);
    const getAttribute = data.attributes.find((attribute) => attribute.id === card.attributeId);
    return {
        nome: card.name,
        tipo: getType.name,
        atributo: getAttribute.name
    }
  });
  return lariYugi;
}

console.log(resumeInfo());