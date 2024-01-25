# Dia de RPG com Hofs :mage_man:

Em um mundo muito distante alguns personagens estão precisando da sua ajuda, e através do **MA-RA-VI-LHO-SO** javaScript vamos conseguir enviar as respostas que os personagens precisam!

Para ajudar, um objeto contendo todas as informações necessárias chegou para gente:

```javaScript
const personagens  = [
	{
		classe: 'Guerreiro',
		status: {
			hp: 150,
			atk: 10,
			def: 30,
		},
		habilidades:['Pular', 'Bloquear', 'Ataque Rapido'],
	},
	{
		classe: 'Arqueiro',
		status: {
			hp: 100,
			atk: 20,
			def: 15,
		},
		habilidades:['Desviar', 'Precisão', 'Tiro Flamejante'],
	},
	{
		classe: 'Mago',
		status: {
			hp: 85,
			atk: 40,
			def: 10,
		},
		habilidades:['Teleportar', 'Bola de Fogo', 'Nevasca'],
	}
]
```

Chegaram alguns pedidos com esse objeto e precisamos que você resolva utilizando HOFs:

**Spoiler: Utilize Find, Every, Some, ForEach e Sort**

## Requisitos :pushpin:

1. Encontre o personagem que utiliza a habilidade Teleportar.

   - _Saida Esperada: Mago_

2. Verifique se todas as classes têm 3 habilidades.

   - _Saida Esperada: true_

3. Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.

   - _Saida Esperada: false_

4. Crie uma função que liste todas as habilidades do Arqueiro.

   - _Saida Esperada:_
   - _['Desviar', 'Precisão', 'Tiro Flamejante']_

5. Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque.

   - _["O ataque do mago é 40", "O ataque do Arqueiro é 20", "O ataque do Guerreiro é 10"]_

6. Faça uma função que retorne a somatória de todos os ataques

   - _Saida Esperada: "O ataque total é 70"_

7. Faça uma função que retorne um novo array com todas as habilidades ordenadas

>     Saida esperada:
>     [
>     	'Ataque Rápido',
>     	'Bloquear',
>     	'Bola de fogo',
>     	'Desviar',
>     	'Nevasca',
>     	'Precisão',
>     	'Pular',
>     	'Teleportar',
>     	'Tiro flamejante'
>     ]
