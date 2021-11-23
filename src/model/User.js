import sequelizePkg from "sequelize";
import { sequelize } from "./dbInit.js";
const { Model, DataTypes } = sequelizePkg;

class User extends Model {
    static associate(models) {
    // define association here
    }
};
User.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    loginId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    nickname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    avatar: {
        allowNull: false,
        type: DataTypes.STRING
    }
    }, {
    sequelize,
    charset: "utf8",
    collate: 'utf8_unicode_ci',
    modelName: 'User',
    timestamps: false,
});

export default User;