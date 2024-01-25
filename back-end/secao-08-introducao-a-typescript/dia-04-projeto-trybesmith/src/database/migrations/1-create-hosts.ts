import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Host } from '../../types/Host';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Host>>('hosts', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('hosts')
  }
}
