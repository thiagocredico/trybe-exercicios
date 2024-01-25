import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Host } from '../../types/Host';

type HostInputtableFields = Optional<Host, 'id'>;
// SAO AS CONFIGURACOES PARA A CRIACAO DE UM OBJETO NA TABELA DO BANCO
// create({ name, email, password });
type HostSequelizeModelCreator = ModelDefined<Host, HostInputtableFields>
export type HostSequelizeModel = Model<Host, HostInputtableFields>;

const HostModel: HostSequelizeModelCreator = db.define('Host', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'hosts',
  timestamps: false,
  underscored: true,
});

export default HostModel;
