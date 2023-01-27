const data = require('../database');

/* RETORNAR TODOS OS ELEMENTOS DO ARRAY CARDS NO SEGUINTE FORMATO:
{
  nome: "nome do monstro",
  tipo: "nome do tipo do monstro",
  atributo: "nome do atributo do monstro"
}
*/

const resumeInfo = () => data.cards.map((card) => {
  const findTypeId = data.types.find((type) => type.id === card.typeId);
  const findAttributeId = data.attributes.find((attribute) => attribute.id === card.attributeId);

  return {
    nome: card.name,
    tipo: findTypeId.name,
    atributo: findAttributeId.name,
  };
});

console.log(resumeInfo());
