import sequelizePkg from "sequelize";
import { sequelize } from "./dbInit.js";
const { Model, DataTypes } = sequelizePkg;

class Chat extends Model {
    static associate(models) {
    // define association here
    }
};
Chat.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    loginId: {
        allowNull: false,
        type: DataTypes.STRING
    },
    nickname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    avatar: {
        allowNull: false,
        type: DataTypes.STRING
    },
    content: DataTypes.STRING
    }, {
    sequelize,
    charset: "utf8",
    collate: 'utf8_unicode_ci',
    modelName: 'Chat',
    timestamps: false,
});

export default Chat;