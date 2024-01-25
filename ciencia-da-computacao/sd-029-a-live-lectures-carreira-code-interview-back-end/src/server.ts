import { PrismaClient } from '@prisma/client';
import app from './app';

export {};

const prisma = new PrismaClient();

const connectWithRetry = async () => {
  try {
    await prisma.$connect();
    console.log('Conexão estabelecida com sucesso!');
  } catch (error: any) {
    console.log(`Erro ao conectar ao banco de dados: ${error.message}`);
    console.log('Tentando novamente em 5 segundos...');
    setTimeout(connectWithRetry, 5000);
  }
};

try {
  const { PORT } = process.env;

  connectWithRetry();

  app.listen(6060, async () => {
    console.log(`Ouvindo a porta ${PORT}`);
  });
} catch (error) {
  console.log(error);
} finally {
  (async () => {
    await prisma.$disconnect();
  })();
}