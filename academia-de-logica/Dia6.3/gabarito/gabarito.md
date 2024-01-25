# Gabarito

Esse é o gabarito da academia de lógica dia 7.2, abaixo estão a resolução de cada exercício.

# isEven

```
expect(isEven(2)).toBe('esse valor é par');

expect(isEven(3)).toBe('esse valor é ímpar');
```

# sumEven

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
expect(sumEven(arr)).toEqual(30);

const arr = [1, 3, 5, 7, 9, 11];
expect(sumEven(arr)).toEqual(0);

expect(sumEven()).toEqual(0);
```

# isNumber

```
expect(isNumber(10)).toBeTruthy();

expect(isNumber('20')).toBeFalsy();
expect(isNumber('string')).toBeFalsy();

expect(isNumber([20, 10, 30, 50, 90])).toBeFalsy();
expect(isNumber(['1', '2', '3', '4'])).toBeFalsy();

expect(isNumber({ a: 10, b: 20, c: 30 })).toBeFalsy();
```

# welcomeUser

```
expect(welcomeUser('Gabriel')).toMatch('Boas-vindas, Gabriel!');

expect(welcomeUser('a')).toMatch(
  'O parâmetro username deve conter pelo menos dois caracteres!',
);
expect(welcomeUser('')).toMatch(
  'O parâmetro username deve conter pelo menos dois caracteres!',
);

expect(welcomeUser(['Carlos'])).toMatch(
  'O parâmetro username deve ser do tipo texto!',
);
expect(welcomeUser()).toMatch(
  'O parâmetro username deve ser do tipo texto!',
);
```

# finalSpeed

```
expect(finalSpeed(5)).toEqual(49);

expect(finalSpeed('5')).toEqual(0);
expect(finalSpeed('string')).toEqual(0);
expect(finalSpeed(['5'])).toEqual(0);
expect(finalSpeed([5])).toEqual(0);
expect(finalSpeed({ a: 5 })).toEqual(0);

expect(finalSpeed()).toEqual(0);
```

# repeatLetter

```
const text = 'how many times does the character occur in this sentence?';

expect(repeatLetter('m', text)).toBe(2);

expect(repeatLetter('h', text)).toBe(4);

expect(repeatLetter('?', text)).toBe(1);

expect(repeatLetter('z', text)).toBe(0);
```

# longestWord

```
const arr = ['I', 'need', 'candy'];
expect(longestWord(arr)).toBe('candy');

const arr = ['help', 'me'];
expect(longestWord(arr)).toBe('help');

expect(longestWord()).toBe('Array inválido!');

expect(longestWord(['xablau', 's', 2])).toBe('Array inválido!');
expect(longestWord([{ xablau: 10 }, 's2'])).toBe('Array inválido!');
expect(longestWord([[1, 2, 3], 's2'])).toBe('Array inválido!');
```

# createState

```
expect(createState('Caduverso', 'CV', 'Caduversolandia', 137921852)).toMatch(
  'Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas',
);

expect(createState('Caduverso', 'CV', 'Caduversolandia')).toMatch(
  'Preencha todos os campos para criar sua cidade!',
);
expect(createState('Caduverso', 'CV', 137921852)).toMatch(
  'Preencha todos os campos para criar sua cidade!',
);
expect(createState('Caduverso', 'Caduversolandia', 137921852)).toMatch(
  'Preencha todos os campos para criar sua cidade!',
);
expect(createState('CV', 'Caduversolandia', 137921852)).toMatch(
  'Preencha todos os campos para criar sua cidade!',
);
```