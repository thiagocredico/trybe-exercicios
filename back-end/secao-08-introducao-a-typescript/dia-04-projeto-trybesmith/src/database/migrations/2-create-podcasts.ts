import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Podcast } from '../../types/Podcast';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Podcast>>('podcasts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
      },
      hostId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'host_id',
        references: {
          model: 'hosts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('podcasts')
  }
}
