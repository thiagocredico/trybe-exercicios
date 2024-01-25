# Use a base image do Node.js com a versão 16.x
FROM node:lts

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte da sua API para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta em que a sua API será executada
EXPOSE 3000

# Defina o comando para iniciar a sua API
CMD [ "npm", "start" ]
