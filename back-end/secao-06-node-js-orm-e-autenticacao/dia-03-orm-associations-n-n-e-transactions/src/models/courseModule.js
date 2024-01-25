/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
const CourseModuleSchema = (sequelize, DataTypes) => {
  const CourseModuleTable = sequelize.define(
    'CourseModule',
    {
      idCourse: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idModule: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'course_modules',
    },
  );

  CourseModuleTable.associate = ({Course, Module}) => {
    Course.belongsToMany(Module, {
      as: 'modules',
      foreignKey: 'idCourse',
      otherKey: 'idModule',
      through: CourseModuleTable,
    });

    Module.belongsToMany(Course, {
      as: 'courses',
      foreignKey: 'idModule',
      otherKey: 'idCourse',
      through: CourseModuleTable,
    });
  };

  return CourseModuleTable;
};

module.exports = CourseModuleSchema;
