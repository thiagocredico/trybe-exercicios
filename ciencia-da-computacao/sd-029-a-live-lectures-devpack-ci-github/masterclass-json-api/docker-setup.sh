#!/bin/bash

# Define as variáveis de ambiente
IMAGE_NAME="nodejs-raw"
CONTAINER_NAME="products-api"
PORT=3000

# Verifica se o contêiner já existe
if docker ps -a --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
    # Verifica se o contêiner está em execução
    if docker ps -f "name=$CONTAINER_NAME" --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
        echo "Parando e removendo o contêiner existente..."
        docker stop $CONTAINER_NAME
        docker rm $CONTAINER_NAME
    else
        echo "Removendo o contêiner existente..."
        docker rm $CONTAINER_NAME
    fi
fi

# Remove a imagem existente, se houver
if [ "$(docker images -q $IMAGE_NAME)" ]; then
    echo "Removendo a imagem existente..."
    docker rmi $IMAGE_NAME
fi

echo "Construindo a imagem Docker..."
docker build -t $IMAGE_NAME .

echo "Criando e iniciando o contêiner..."
docker run -d --name $CONTAINER_NAME -p $PORT:$PORT $IMAGE_NAME

echo "Setup do Docker concluído com sucesso."
