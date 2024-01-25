import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IBook } from '../../interfaces/books/IBook';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IBook>>('books', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('books');
  },
};
