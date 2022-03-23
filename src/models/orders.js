"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Orders, Books }) {
      // define association here
      Orders.belongsTo(Users, { foreignKey: "users_id" });
      Orders.belongsTo(Books, { foreignKey: "books_id" });
    }
  }
  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      users_id: DataTypes.INTEGER,
      books_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      orderAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
