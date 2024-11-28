import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
class Revenue extends Model {
    id!: number;
    user_id!: number;
    description!: string;
    date!: Date;
    amount!: number;
}
Revenue.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
  },
  {
    sequelize,
    modelName: "Revenue",
  }
);
export default Revenue;
