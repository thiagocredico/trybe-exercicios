//1
function quadrilatero(base, altura) {
  let resultado = {
    perimetro: (2 * base) + (2 * altura),
    area: (base * altura)
  };
  return resultado;
};

//2
function imparesEPares(numeros) {
  let resultado = {
    par: 0,
    impar: 0,
  };

  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[i] % 2 == 0) {
      resultado.par += 1;
    } else {
      resultado.impar += 1;
    };
  };
  return resultado;
};

// 2 com forof
function imparesEPares(numeros) {
  let resultado = {
    par: 0,
    impar: 0,
  };

  for (const numero of numeros) {
    if(numero % 2 === 0) {
      resultado.par += 1;
    } else {
      resultado.impar += 1;
    };
  }
  return resultado;
};

//3
function verificaString(palavra, ending) {
  if (palavra.endsWith(ending)) {
    return true
  }
  return false;
}

//3 com split 
function verificaFimPalavra(word, ending) {
  let resultado = word.split(ending);
  if (resultado[resultado.length - 1] === '') {
    return true;
  }
  return false;
}
