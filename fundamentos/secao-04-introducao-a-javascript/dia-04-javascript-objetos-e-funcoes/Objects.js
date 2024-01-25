// let items = ['Big Mac', 'Big Tasty', 'Batata', 'Refrigerante', 'Suco'];
// let price = [20, 30, 20, 5, 4];

// // objeto
// let mcItems = {       
//   'Big Mac': 20,
//   'Big Tasty': 30,
//   'Batata': 20,
//   'Refrigerante': 5,
//   'Suco': 4,
// }

let person = {
  firstName: 'Douglas',
  lastName: 'Oliveira',
  canDrive: false,
  favoriteMovies: ['Wandinha','harry Potter'],    
  favoriteNumbers: [3,12,15],
}
person.firstName = 'Diego';
person.city = 'Curitiba';

person['favoriteFood'] = 'Doritos';

// person['Wow'] = [1,2,3]
person.favoriteMovies.push('Guardioes da galáxia natal');

person.color = ['azul','verde'];

person.address = {
  street: 'Rua sem saída',
  number: 345,
}

//como deletar algo no objeto
delete person.city;

//for para percorrer o objeto 
for (let key in person){
  console.log(key, person[key]);
}


// console.log(person);
// console.log(person.firstName);  //dot notation
// console.log(person.favoriteMovies[1]); //brackets notation





