function myRemove(arr, item) {
  let newArr = []; // novo array vazio
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

module.exports = { myRemove };
