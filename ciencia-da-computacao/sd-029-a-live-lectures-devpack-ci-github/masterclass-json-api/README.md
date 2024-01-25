# masterclass-json-api

O código para essa demo veio [deste exercício](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/9583cb4e-f187-48a3-a9eb-ed48404430e5/lesson/7a58380f-46f3-4652-8a63-5b4ea84255bc) que está no módulo de [Real Life Engineering](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd). Foi adicionado o linter de back-end e as devidas correções de lint;

## Rodando o projeto

1️⃣ Instale as dependências

```sh
npm install
```

2️⃣ Vc pode rodar o projeto de duas formas:

- 1️⃣ Rodando com o nodemon (recomendado)

Com o nodemon, vc não precisa ficar reiniciando o servidor a cada alteração no código.

```sh
npm run dev
```

- 2️⃣ Rodando com o node

```sh
npm start
```

3️⃣ Acesse a API em [http://localhost:3000](http://localhost:3000)

### Rodando o linter

Para rodar o linter, execute o comando:

```sh
npm run lint
```

Para corrigir os erros de lint, execute o comando:

```sh
npm run lint:fix
```

### Rodando os testes

Para rodar os testes, execute o comando:

```sh
npm test
```

---

## Docker

Você também pode executar o projeto usando o Docker. Certifique-se de ter o Docker instalado no seu sistema.

### Dockerfile

O projeto já possui um Dockerfile configurado para facilitar a criação da imagem Docker. Você pode personalizar o Dockerfile de acordo com suas necessidades.

### Configuração Docker

1️⃣ Execute o script de setup para criar e configurar o contêiner Docker:

```sh
./docker-setup.sh
```

2️⃣ Use os comandos Docker para gerenciar o contêiner:

```sh
./docker-commands.sh
```

O script `docker-commands.sh` exibe um menu com as seguintes opções:

1. Ligar a API
2. Desligar a API
3. Executar os testes
4. Executar o linter

Selecione a opção desejada digitando o número correspondente.

---

## Exemplos de chamada para a API

Essa API precisa de um token que case com a regex definida no middleware, vamos usar um genérico para os exemplos. Os dados estão em variáveis de ambiente para facilitar a execução dos comandos.

### Listar os produtos

```sh
TOKEN=12345678abcdefgh; curl -X GET -H "Authorization: $TOKEN" http://localhost:3000/products
```

### Cadastrar um produto

`C`reate

```sh
TOKEN=12345678abcdefgh; curl -X POST -H "Authorization: $TOKEN" -H 'Content-Type: application/json' -d '{"name":"Elmo on fire","brand":"Xablau"}' http://localhost:3000/product
```

### Buscar um produto pelo ID

`R`ead

```sh
ID=100; TOKEN=12345678abcdefgh; curl -X GET -H "Authorization: $TOKEN" "http://localhost:3000/product/$ID"
```

### Atualizar um produto

`U`pdate

```sh
ID=100; NAME="novo nome"; BRAND="nova marca"; TOKEN=12345678abcdefgh; curl -X PUT -H "Authorization: $TOKEN" -H 'Content-Type: application/json' -d '{"name":"'"$NAME"'","brand":"'"$BRAND"'"}' "http://localhost:3000/product/$ID"
```

### Deletar um produto

`D`elete

```sh
ID=100; TOKEN=12345678abcdefgh; curl -X DELETE -H "Authorization: $TOKEN" "http://localhost:3000/product/$ID"
```
