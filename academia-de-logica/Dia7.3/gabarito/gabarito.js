const personagens = require('../data');

// exemplo de como chegar nas chaves e valores dentro do objeto
console.log(`${personagens[2].classe} utilizou ${personagens[2].habilidades[0]}
e o ${personagens[1].classe} ficou com ${
  personagens[1].status.hp -
  (personagens[2].status.atk - personagens[1].status.def)
} de vida`);

// Encontre o personagem que utiliza a habilidade Teleportar
// Saida Esperada: Mago
const habilidadeTeleportar = personagens.find((classe) =>
  classe.habilidades.find((poder) => poder === 'Teleportar'),
);
console.log(habilidadeTeleportar.classe);

// Verifique se todas as classes tem 3 habilidades
// Saida Esperada: true
const numeroDeHabilidades = personagens.every(
  (classe) => classe.habilidades.length === 3,
);
console.log(numeroDeHabilidades);

// Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.
// Saida Esperada: false
const hpMaior = () => {
  const hp = personagens.some((classe) => classe.status.hp > 150);
  return hp;
};
console.log(hpMaior());

// Crie uma função que liste todas as habilidades do Arqueiro
// Saida Esperada: ['Desviar', 'Precisão', 'Tiro Flamejante']
const habilidadesArqueiro = () => {
  const arqueiroObj = personagens.find(
    (classe) => classe.classe === 'Arqueiro',
  );
  return arqueiroObj.habilidades;
};

console.log(habilidadesArqueiro());

// Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque:
// Esperado: ["O ataque do mago é 40", "O ataque do Arqueiro é 20", "O ataque do Guerreiro é 10"]
const ordenarAtaque = () => {
  const ataqueOrdenado = personagens.sort(
    (classeA, classeB) => classeB.status.atk - classeA.status.atk,
  );
  let finalArray = [];
  ataqueOrdenado.forEach((personagem) =>
    finalArray.push(
      `O ataque do ${personagem.classe} é ${personagem.status.atk}`,
    ),
  );
  return finalArray;
};
console.log(ordenarAtaque());

// Faça uma função que retorne a somatoria de todos os ataques
// Esperado: "O ataque total é 70"
const totalAtk = () => {
  let total = 0;
  personagens.forEach((classe) => (total += classe.status.atk));
  return `O Ataque total é ${total}`;
};
console.log(totalAtk());

// Faça uma função que retorne um novo array com todas as habilidades ordenadas
// saida esperada:
// [
//   'Ataque Rapido',
//   'Bloquear',
//   'Bola de fogo',
//   'Desviar',
//   'Nevasca',
//   'Precisão',
//   'Pular',
//   'Teleportar',
//   'Tiro flamejante'
// ]

const imprimirHabilidades = () => {
  const arrayHabilidades = [];
  personagens.forEach((classes) =>
    classes.habilidades.forEach((poder) => arrayHabilidades.push(poder)),
  );
  arrayHabilidades.sort();
  return arrayHabilidades;
};
console.log(imprimirHabilidades());
