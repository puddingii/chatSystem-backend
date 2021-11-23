import sequelizePkg from "sequelize";
import { sequelize } from "./dbInit.js";
const { Model, DataTypes } = sequelizePkg;

class LoginLog extends Model {
    static associate(models) {
    // define association here
    }
};
LoginLog.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    loginId: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isRemembered: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    }
    }, {
    sequelize,
    charset: "utf8",
    collate: 'utf8_unicode_ci',
    modelName: 'LoginLog',
    timestamps: false,
});

export default LoginLog;