import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Podcast } from '../../types/Podcast';

type PodcastInputtableFields = Optional<Podcast, 'id'>;
type PodcastSequelizeModelCreator = ModelDefined<Podcast, PodcastInputtableFields>
export type PodcastSequelizeModel = Model<Podcast, PodcastInputtableFields>;

const PodcastModel: PodcastSequelizeModelCreator = db.define('Podcast', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hostId: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'podcasts',
  timestamps: true,
  underscored: true,
});

export default PodcastModel;
