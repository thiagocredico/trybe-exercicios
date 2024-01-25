import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeBook extends Model<InferAttributes<SequelizeBook>,
InferCreationAttributes<SequelizeBook>> {
  declare id: CreationOptional<number>;

  declare title: string;

  declare price: number;

  declare author: string;

  declare isbn: string;
}

SequelizeBook.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING(100),
  },
}, {
  sequelize: db,
  modelName: 'books',
  timestamps: false,
});

export default SequelizeBook;
