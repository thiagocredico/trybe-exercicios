## Bora codar?


`Exercício 1:`

Escreva uma função que, dado um array, verifique se todos os valores são iguais.

Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições a função deve jogar um erro com a mensagem "Parâmetro inválido.".

O retorno deve ser um booleano indicando se todos os valores são iguais ou não, e no caso de parâmetro inválido a mensagem de erro deve ser retornada.


`Exercício 2:`

Escreva uma função que recebe por parâmetro o array de objetos com informações de personagens, e deve retornar um objeto no seguinte formato:

	{
		'House Targaryen': ['Daenerys Targaryen'],
		'Tarth': ['Brienne of Tarth'],
		'House Stark': ['Jon Snow', 'Arya Stark'],
	}

O objetivo é determinar quem compõe cada família de Westeros.


`Exercício 3:`

Utilizando operadores ternários e arrow functions reescreva a seguinte função:

	function isZero(number) {
		if (number === 0) {
			return 'Zero';
		}
		return 'Not zero';
	}


`Exercício 4:`

Escreva uma função que recebe por parâmetro um objeto com as notas de filmes, e tem um segundo parâmetro opcional.

Caso não venha nada no segundo parâmetro o retorno será a média das notas dos filmes, mas caso o segundo parâmetro venha preenchido, deve vir com o nome de um filme, e o retorno será um booleano confirmando se o filme se encontra no objeto ou não.