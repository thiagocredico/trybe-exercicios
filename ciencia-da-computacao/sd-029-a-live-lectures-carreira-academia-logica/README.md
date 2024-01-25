# Olá, esse é o repositório do desafio desenvolvido na Academia de Lógica 🤖

## Enunciado do Desafio

Crie um programa em Python em que num banco, uma função recebe um array com conta de origem e conta de destino, e realiza as operação de transferência, para isso irá verificar se a conta existe, seja a de origem ou de destino, bem como se a de origem tem saldo. Se a conta existe e tiver saldo então realiza a transferência com sucesso, caso não, mostra a mensagem específica de "conta não existe" caso a conta não exista e "sem saldo" caso não haja saldo.

## Passo a Passo do Pensamento Computacional

> Extrair as informações bancárias de um banco de dados ou arquivo

> Verificar se a conta de origem e a conta de destino
> existem no banco de dados.

> Se a conta de origem ou destino não existir,
> exibir a mensagem "Conta de origem/destino não existe"
> e interromper o processo.

> Criar função de transferência bancária.

> Verificar se a conta de origem possui saldo suficiente
> para realizar a transferência.

> Se a conta de origem não possuir saldo suficiente,
> exibir a mensagem "Saldo insuficiente".

> Caso contrário, subtrair o valor da transferência do saldo da conta de origem
> e adicionar o mesmo valor ao saldo da conta de destino.

> Por fim exibir uma mensagem indicando que a transferência foi
> realizada com sucesso.


## Esse desafio é composto por dois módulos:

- **Módulo de manipulação de um dicionário**, em que os dados das contas está contido em um dicionário no mesmo arquivo;

- **Módulo de manipulação de um arquivo json** em que os dados das contas está contido em um arquivo .json.
