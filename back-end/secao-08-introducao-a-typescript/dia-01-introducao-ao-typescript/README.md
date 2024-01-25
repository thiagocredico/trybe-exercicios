# Trybe Booking

A Trybe Booking está precisando implementar um sistema de reservas online para permitir que as pessoas façam reservas de quartos de forma fácil e conveniente. Para isso, foi solicitado a garantia e segurança do código em tempo de execução com os seguintes focos:

- Prevenir bugs;
- Facilitar a manutenção do código;
- Promover a escalabilidade;
- Melhorar a produtividade.

Além disso, é desejável que a aplicação possa ser facilmente integrada com outros sistemas e tecnologias no futuro como: express, validações e banco de dados.

## Funcionalidades

- Recuperar os quartos disponíveis de um hotel;
- Reservar um quarto.

## Especificações

- Um hotel terá: nome, quartos e reservas.
- Cada quarto terá: id, número do apartamento, tipo (simples/duplo/suite), preço e disponibilidade.
- Cada reserva terá: nome da pessoa hóspede, quarto que foi reservado, data de check-in e data de check-out.

## O que já foi implementado?

A liderança técnica da equipe inicializou o projeto com:
    - Typescript instalado;
    - ESLint configurado;
    - Uma simulação de banco de dados em memória no arquivo `src/database/HotelDB.ts` para que possamos começar a implementar.
