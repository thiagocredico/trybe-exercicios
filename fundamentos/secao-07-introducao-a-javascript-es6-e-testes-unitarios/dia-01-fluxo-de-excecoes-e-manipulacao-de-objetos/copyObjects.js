// let a = "variável verdadeira";
// let b = "variável clone";
// b = a;
// a = "variável modificada";

// console.log(a);
// console.log(b);

// let estudanteOriginal = {
//     nome: 'Fulano',
//     turma: '23',
//    }
// let estudanteClone = {};
// Object.assign(estudanteClone, estudanteOriginal);
// estudanteOriginal.formatura = true;
// console.log(estudanteClone);
// console.log(estudanteOriginal);
   
const estudante = {
    nome: 'Zeze',
    turma: '23',
   };
   
   const projetos = {
    fundamentos: {
      projeto1: 'HTML',
      projeto2: 'JS',
      projeto3: 'CSS',
    }
   };
   
   const agenda = {
    bloco1: 'Linux',
    bloco2: 'Git',
    bloco3: 'HTML'
   };

const finalObject = {};
Object.assign(finalObject, estudante, projetos['fundamentos'], agenda);
// finalObject.fundamentos.projeto1 = "jest";
console.log(finalObject);

// const test = [1, 2, 3];
// test[2] = 10;
// console.log(test);