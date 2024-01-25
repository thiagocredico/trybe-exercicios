/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const ModuleSchema = (sequelize, DataTypes) => {
  const ModuleTable = sequelize.define('Module', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.DECIMAL,
    qtBlock: DataTypes.DECIMAL,
  }, {
    tableName: 'modules',
    timestamps: false
  });

  return ModuleTable;
};

module.exports = ModuleSchema;
