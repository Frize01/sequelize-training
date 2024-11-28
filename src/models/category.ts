import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Category extends Model {
    id!: number;
    user_id!: number;
    name!: string;
}
Category.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Category",
  }
);
export default Category;
