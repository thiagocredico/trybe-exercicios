const CourseSchema = (sequelize, DataTypes) => {
  const CourseTable = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
  },
  {
    tableName: 'courses',
    underscored: true,
  });

  CourseTable.associate = (models) => {
    CourseTable.hasMany(models.Student, {
      as: 'students',
      foreignKey: 'idCourse'
    })
  }
  return CourseTable;
};

module.exports = CourseSchema;