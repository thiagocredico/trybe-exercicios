const { myFizzBuzz } = require("./myFizzBuzz");

describe("Testar a função myFizzBuzz", () => {

  //Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
  it("Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.", () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  });

	//Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
  it("Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(3)).toEqual("fizz");
  });

	//Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
  it("Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(5)).toEqual("buzz");
  });

	// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
	it("Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

	// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
	it("Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz('texto')).toEqual(false);
  });

});
