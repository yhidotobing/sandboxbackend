"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders, Books, Type_books }) {
      // define association here
      Books.hasMany(Orders, { foreignKey: "books_id" });
      Books.belongsTo(Type_books);
    }
  }
  Books.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type_books_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
