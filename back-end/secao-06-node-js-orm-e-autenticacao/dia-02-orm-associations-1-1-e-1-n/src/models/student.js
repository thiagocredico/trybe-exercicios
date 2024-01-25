/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const StudentSchema = (sequelize, DataTypes) => {
  const StudentTable = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'students',
    underscored: true,

  });
  StudentTable.associate = (models) => {
    StudentTable.belongsTo(models.Course, {
      as: 'course',
      foreignKey: 'idCourse',
    })
  };

  return StudentTable;
}

module.exports = StudentSchema