import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Expense extends Model {
    id!: number;
    user_id!: number;
    description!: string;
    date!: Date;
    amount!: number;
    category_id!: number;
}
Expense.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Expense",
  }
);
export default Expense;
