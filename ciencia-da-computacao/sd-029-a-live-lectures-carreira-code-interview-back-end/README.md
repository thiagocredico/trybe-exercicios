# API Node JS

Criando projeto

```bash
npm init -y
npm install express
npm install typescript
npm install ts-node
npm install cors
npm install prisma
npm install @prisma/client
npm install @types/cors
npm install ts-node-dev --save-dev
npm install eslint --save-dev
npm install @types/express
tsc --init
```

Criando pastas

```bash
mkdir src
touch src/app.ts
mkdir src/controllers
mkdir src/middleware
mkdir src/models
mkdir src/repository
mkdir src/routes
mkdir src/services
mkdir src/validations
```

Prisma

```bash
npm install @prisma/client
npx prisma init
```

```docker
docker network create airbnb_net
docker compose up back
```

Criar banco (workbench)

```sql
CREATE DATABASE IF NOT EXISTS airbnb;
```

Prisma

```bash
# Gerar migrates
docker compose exec -it back npx prisma migrate dev --name init

# Gerar dump da base
docker compose exec -it back npx prisma db pull

# Rodar migrates criadas

docker compose exec -it back npx prisma migrate dev
```
