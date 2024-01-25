# Teste Unitário

**Inicializando o projeto**

- Faça o clone do projeto com o comando `git clone git@github.com:tryber/academia-de-logica.git`;
- Verifique se você está na branch master com o comando `git branch`;
- Crie sua branch com `git checkout -b SEUNOME`;
- Instale as dependências com `npm install`;

Para fazer os testes das funções, basta rodar o comando `npm test`. Para rodar um único teste, você pode utilizar o comando `npm test nome-do-arquivo`, por exemplo: `npm test isEven`

Para ver a cobertura de testes da função, basta rodar o comando `npm run test:coverage`

Esse repositório tem como objetivo treinar a criação de testes unitários para funções já implementadas.

[Documentação Jest](https://jestjs.io/docs/getting-started)

**Obs:** Cada teste tem uma linha que é `fail('Remova essa linha e escreva seu teste aqui');`, para seu teste funcionar, essa linha precisa ser removida ou comentada ;).

Cada função implementada está em um arquivo com seu nome na pasta `src`, os arquivos de testes já foram criados e estão na pasta `test`.

## isEven

<hr>

Essa função recebe um número como parâmetro e faz uma validação se o número é ou não par, retornando uma string.

**O que será testado**

- Escreva um teste se quando a função é chamada `isEven(2)`, retorna a string 'esse valor é par';
- Escreva um teste se quando a função é chamada `isEven(3)`, retorna a string 'esse valor é ímpar';

## sumEven

<hr>

A função recebe um array de números por parâmetro e faz a soma de todos os números pares.

_dica:_ Já fizemos uma função que verifica se o número é par;

**O que será testado**

- Retorne a soma de todos os números pares passado no array como parâmetro da função;
- Retorne `0` se o array não tenha ao menos um número par;
- Retorne `0` se o parâmetro da função estiver vazio;

## isNumber

<hr>

A função recebe um parâmetro como argumento e faz uma validação se seu tipo de dado é ou não um número;

- Retorna `true` se passar um número como parâmetro da função;
- Retorna `false` se passar uma string como parâmetro da função;
- Retorna `false` se passar uma array como parâmetro da função;
- Retorna `false` se passar um objeto como parâmetro da função;

## welcomeUser

<hr>

A função recebe uma string com o nome de uma pessoa usuária e retorna uma nova string desejando
boas-vindas.

**O que será testado**

- Retorna `Boas-vindas, Gabriel!` caso `Gabriel` seja o nome passado como parâmetro;
- Retorna `O parâmetro username deve conter pelo menos dois caracteres!` caso a quantidade de caracteres seja menor ou igual a 1;
- Retorna `O parâmetro username deve ser do tipo texto!` caso o parâmetro não seja do tipo `string`;

## finalSpeed

<hr>

A função recebe um número como parâmetro e faz o cálculo da velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo.

_obs:_ A fórmula para o cálculo é `velocidade = tempo * gravidade`. Considere a gravidade constante de 9.8.

**O que será testado**

- Retorna `49` caso a função seja chamanda com o argumento 5`finalSpeed(5)`;
- Retorna `0` caso o parâmetro seja algum tipo diferente de `number`;
- Retorna `0` caso não seja passado parâmetros;

## repeatLetter

<hr>

A função recebe dois parâmetros, sendo uma letra e um texto, conte quantas vezes a letra repete no texto;

**O que será testado**

- Retorne `2` quando a função for chamada `repeatLetter('m', 'how many times does the character occur in this sentence?')`;
- Retorne `4` quando a função for chamada `repeatLetter('h', 'how many times does the character occur in this sentence?')`;
- Retorne `1` quando a função for chamada `repeatLetter('?', 'how many times does the character occur in this sentence?')`;
- Retorne `0` quando a função for chamada `repeatLetter('z', 'how many times does the character occur in this sentence?')`;

## longestWord

<hr>

A função recebe um array de string como parâmetro e retorna a maior palavra contida nele;

**O que será testado**

- Retorne `candy` caso o array passado seja `['I', 'need', 'candy']`;
- Retorne `help` caso o array passado seja `['help', 'me']`
- Retorne `Array inválido!` caso não envie parâmetros
- Retorne `Array inválido!` caso o array possua algum caractere diferente de string

## createState

<hr>

A função recebe 4 parâmetros e cria um Estado, recebendo o nome do Estado, Sigla, Capital e População;

- Retorne a string `Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas` quando passamos `Caduverso`, `CV`, `Caduversolandia` e `137921852`
- Retorne `Preencha todos os campos para criar sua cidade!` caso algum parâmetro não seja passado para a função
