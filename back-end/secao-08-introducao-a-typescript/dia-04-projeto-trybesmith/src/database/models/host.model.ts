import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { Host } from '../../types/Host';
import db from './index';

type HostInputtableFields = Optional<Host, 'id'>;
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
