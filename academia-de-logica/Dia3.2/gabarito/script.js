/* Descubra a idade mínima */
let marinaAge = 20
let silviaAge = 30
let izaAge = 10

  if (marinaAge < silviaAge && marinaAge < izaAge) {
    console.log('Marina é a mais jovem e possui ' + marinaAge + ' anos de idade.'); 
  } else if (silviaAge < marinaAge && silviaAge < izaAge) {
   console.log('Marina é a mais jovem e possui ' + silviaAge + ' anos de idade.');
  } else {
    console.log('Marina é a mais jovem e possui ' + izaAge + ' anos de idade.');
  }



/* Taxa Metabólica Basal */

let age = 24
let sex = 'F'
let weight = 60
let heigh = 163

  let bmr;

  if (sex === 'M') {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 + 5;
  }

  if (sex === 'F') {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 - 161;
  }

  console.log('A taxa metabólica basal é: ' + bmr + ' Kcal') 



/*  01 - Lanchonete da Trybe */
let number = 4
  switch (number) {
    case 1:
      console.log('1 - Trybe Lanche Feliz');
      break
    case 2:
      console.log('2 - McTrybe');
      break
    case 3:
      console.log('3 - TrybeWooper');
      break
    case 4:
      console.log('4 - X-Trybe');
      break
    case 5:
     console.log('5 - Triplo Trybe com JS');
     break
    default:
      console.log('Não temos esta opção ainda :(');
  }


