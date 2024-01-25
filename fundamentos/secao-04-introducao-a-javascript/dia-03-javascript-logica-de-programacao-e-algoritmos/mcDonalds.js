let items = ['Big Mac', 'Big Tasty', 'Batata', 'Refrigerante', 'Suco', 'quarteirao'];
let price = [20, 30, 20, 5, 4];


//CONCATENAÇÃO DE STRING NO CONSOLE
// console.log(items[0] + ' = R$ ' + price[0]); // big mac
// console.log(items[1] + ' = R$ '+ price[1]);
// console.log(items[2] + ' = R$ ' + price[2]);
// console.log(items[3] + ' = R$ ' + price[3]);
// console.log(items[4] + ' = R$ ' + price[4]);

//console.log(price[0]); 
//CONCATENAR COM LOOP DE REPETIÇÃO
// for(let index = 0; index<items.length; index+=1 ){ //index=index+1  index++
//   if(price[index]===undefined){
//     console.log(items[index] + ' = Preço indefinido');
//   } else {
//     console.log(items[index] + ' = R$ ' + price[index]);
//   }
// }

// let money = 20;
// let cart = [];

// for(let index = 0; index<price.length; index+=1 ){
//  if(price[index]<=money){ //10<=20
//     cart.push(items[index] + ' = ' + price[index]);
//  }
// }

// console.log('Os valores que eu posso comprar ' + cart);

let money = 10;
let buyOptions = [];

for(let index = 0; index < price.length; index += 1 ){
 if(price[index] <= money){ //10<=20
    buyOptions.push(items[index]);
    //console.log('primeiro if' + buyOptions[index])
 }
 for(let indexVerify = 0; indexVerify < price.length; indexVerify += 1 ){
    if(index != indexVerify && price[index] + price[indexVerify] <= money) {
      buyOptions.push(items[index] + '+' + items[indexVerify]);
    }
 }
}

console.log('Mostra as opções de compra ' + buyOptions);

//remove o [index] também de Options, porque eu quero vetor inteiro criado. 