const CourseSchema = (sequelize, DataTypes) => {
  const CourseTable = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
  },
    {
      tableName: 'courses',
      underscored: true,
      timestamps: false
    });
  return CourseTable;
};

module.exports = CourseSchema;

// MODEL É A REPRESENTACAO DA TABELA A NIVEL DE CÓDIGO