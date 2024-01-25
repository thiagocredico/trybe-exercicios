const point = [1.0, 2.2, -6.6, -10.6, 5.0];
const otherPoint = [0.1, 3.5, -99.6];


const printPointCoordinates = (x, y, z) => {
   return `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;
}



module.exports = { printPointCoordinates, point, otherPoint };