//REST PARAM
const sumAll = (...numbers) => numbers.reduce((soma, number) =>  soma + number , 0) //rest parameter
//    let sum = 0;
//    numbers.forEach((number) => {
//     sum += number;
//    });
//    return sum;
    


// console.log(sumAll(1, 2, 3));
const values = [1, 2, 3]
console.log(sumAll(...values)); //spread operator
//[[1, 2, 3]]

module.exports = {sumAll}
