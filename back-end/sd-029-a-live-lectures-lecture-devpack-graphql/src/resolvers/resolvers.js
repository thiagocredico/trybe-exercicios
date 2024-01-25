const connection = require('../utils/dbConfig');

const resolvers = {
  Query: {
    hello: () => 'World',
    autores: async () => {
      try {
        const [rows] = await connection.execute(
          `SELECT a.id, a.nome, b.id AS livro_id, b.titulo, b.ano_publicacao 
            FROM autores a 
            INNER JOIN autores_livros al 
            ON a.id = al.autor_id 
            INNER JOIN livros b 
            ON al.livro_id = b.id`,
        );
        const authorsMap = new Map();
        rows.forEach((row) => {
          const { id, nome, livro_id, titulo, ano_publicacao } = row;
          if (!authorsMap.has(id)) {
            authorsMap.set(id, {
              id,
              nome,
              livros: [],
            });
          }
          const author = authorsMap.get(id);
          author.livros.push({ id: livro_id, titulo, ano_publicacao });
        });
        const authors = Array.from(authorsMap.values());
        return authors;
      } catch (error) {
        console.error('Error quering authors:', error);
        throw new Error(error.message);
      }
    },
    livros: async () => {
      const [livros] = await connection.execute('SELECT * FROM livros;');
      return livros;
    },
  },
};

module.exports = resolvers;
