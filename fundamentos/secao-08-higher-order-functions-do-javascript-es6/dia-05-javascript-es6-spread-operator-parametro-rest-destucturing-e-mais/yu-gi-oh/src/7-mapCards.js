const data = require('../database');

/* RETORNAR TODOS OS ELEMENTOS DO ARRAY CARDS NO SEGUINTE FORMATO:
{
  nome: "nome do monstro",
  tipo: "nome do tipo do monstro",
  atributo: "nome do atributo do monstro"
}
*/

const resumeInfo = (array) => array.map(({name: nome, typeId }) => {
  const {name: tipo} = data.types.find((type) => type.id === typeId);
  const {name: atributo} = data.attributes.find((attribute) => attribute.id === card.attributeId);

  return {
    nome,
    tipo,
    atributo
  };
});

console.log(resumeInfo(data.cards));
