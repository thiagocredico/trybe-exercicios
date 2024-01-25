const horrorMovies = ['Get Out', 'Us', 'Ma'];
const scifiMovies = ['Blade', 'MIB', 'Tenet', 'I Am Legend'];

let awesomeMovies = [...horrorMovies, ...scifiMovies];

// horrorMovies.forEach((hororMovie)=> {
//     awesomeMovies.push(hororMovie);
// })

// scifiMovies.forEach((scifiMovie)=> {
//     awesomeMovies.push(scifiMovie);
// })

console.log(awesomeMovies);


module.exports = { awesomeMovies };