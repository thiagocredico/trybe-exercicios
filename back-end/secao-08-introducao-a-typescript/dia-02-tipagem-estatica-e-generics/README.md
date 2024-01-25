# Trymazon

A Trymazon é um e-commerce e está precisando recuperar uma lista de produtos do banco de dados. Existem vários produtos, cada um deles em grande quantidade. Com isso, existe uma preocupação com a ideia de apresentar todos os dados de uma única vez e isso atrapalhar a experiência da pessoa usuária, bem como prejudicar a performance da aplicação. Assim sendo, foi especificado que cada tipo de produto seja exibido em sua própria página para que as pessoas usuárias possam navegar pelos produtos. Ainda sim, será necessário usar a uma mesma função para obter produtos de quaisquer tipos.

No entanto, há um problema: a lista de produtos pode ter diferentes informações e metadados, a depender do tipo de produto. Por exemplo: camisas possuem variação de cores e tamanhos. Jogos tem variação de para qual console são compatíveis. Como podemos garantir uma única lógica de recuperação de produtos que funcione corretamente para tão diferentes tipos de dados?

Para resolver esse problema, podemos usar os `Generics` do TypeScript para criar a nossa função com tipagem _genérica_. Dessa forma, podemos deixar para cada página definir o tipo de dados que a função espera receber como parâmetro, cabendo a nós garantir que ela funcione corretamente para diferentes tipos de dados.

## Funcionalidades

- Informar os produtos que só possuem uma página de listagem.
- Informar se existem mais páginas do respectivo produto.

## Especificações

- Cada livro terá: nome, preço e autor.
- Cada roupa terá: nome, preço e tamanho.
- Cada eletrônico terá: nome, preço e marca.
- Cada página de produto terá: os dados com a lista de produtos e se existe mais páginas.
