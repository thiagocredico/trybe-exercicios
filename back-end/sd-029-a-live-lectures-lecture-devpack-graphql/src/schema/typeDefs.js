const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    titulo: String
    ano_publicacao: Int
  }
  type Author {
    id: ID!
    nome: String
    livros: [Book]
  }
  type Query {
    hello: String
    autores: [Author]
    livros: [Book]
  }
`;

module.exports = typeDefs;
