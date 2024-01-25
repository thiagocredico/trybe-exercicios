#!/bin/bash

# Altere a variável abaixo para corresponder ao nome da sua imagem Docker
IMAGE_NAME="nodejs-raw"

# Altere a variável abaixo para corresponder ao nome do seu contêiner
CONTAINER_NAME="products-api"

PORT=3000

# Função para ligar a API
start_api() {
    if docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
        echo "A API já está em execução."
    else
        echo "Iniciando a API..."
        docker start $CONTAINER_NAME
    fi
}

# Função para desligar a API
stop_api() {
    if docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
        echo "Parando a API..."
        docker stop $CONTAINER_NAME
    else
        echo "A API não está em execução."
    fi
}

# Função para executar os testes
run_tests() {
    if docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
        if ! docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}} {{.Status}}" | grep -q "^$CONTAINER_NAME\s\+Up"; then
            echo "O contêiner '$CONTAINER_NAME' está parado. Iniciando o contêiner..."
            start_api
        fi
        echo "Executando os testes..."
        docker exec $CONTAINER_NAME npm test
    else
        echo "Erro: O contêiner '$CONTAINER_NAME' não está em execução. Inicie o contêiner antes de executar os testes."
    fi
}

# Função para executar o linter
run_linter() {
    if docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
        if ! docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}} {{.Status}}" | grep -q "^$CONTAINER_NAME\s\+Up"; then
            echo "O contêiner '$CONTAINER_NAME' está parado. Iniciando o contêiner..."
            start_api
        fi
        echo "Executando o linter..."
        docker exec $CONTAINER_NAME npm run lint
    else
        echo "Erro: O contêiner '$CONTAINER_NAME' não está em execução. Inicie o contêiner antes de executar o linter."
    fi
}


# Verifica se o nome do contêiner já existe
if ! docker ps -a --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
    echo "Erro: O contêiner '$CONTAINER_NAME' não existe. Execute o script de setup 'docker-setup.sh' primeiro."
    exit 1
fi

# Exibe as opções disponíveis para o usuário
echo "Opções disponíveis:"
echo "1. Ligar a API"
echo "2. Desligar a API"
echo "3. Executar os testes"
echo "4. Executar o linter"

# Lê a opção escolhida pelo usuário
read -p "Digite o número da opção desejada: " option

# Executa a função correspondente à opção escolhida
case $option in
    1)
        start_api
        ;;
    2)
        stop_api
        ;;
    3)
        run_tests
        ;;
    4)
        run_linter
        ;;
    *)
        echo "Opção inválida. Saindo do script."
        ;;
esac
