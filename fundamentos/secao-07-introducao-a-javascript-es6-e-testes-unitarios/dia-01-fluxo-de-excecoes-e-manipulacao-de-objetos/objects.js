const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'O Tesouro dos Dez Avatares',
   };

//    quadrinho1.editora = "Abril";
const newKey = "editora";
quadrinho1[newKey] = "Abril";
quadrinho1["ano"] = "1960";

for(index in quadrinho1){
    // console.log(index); acessando as chaves
    // console.log(quadrinho1[index]); acessando os valores
    // console.log(index, quadrinho1[index]);
}
//    console.log(quadrinho1);

console.log(Array.isArray(Object.keys(quadrinho1)));
console.log(typeof Object.keys(quadrinho1));
// console.log(Object.values(quadrinho1));
// console.log(Object.entries(quadrinho1));

// console.log(typeof []);
// console.log(typeof {});
