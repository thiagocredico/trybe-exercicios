'use strict';
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
      underscored: true,
      timestamps:false,
      tableName: 'Products'
    },
  );
  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return Product;
};
