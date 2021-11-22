import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config(process.cwd(), ".env");

export const sequelize = new Sequelize("chatSystem", process.env.DB_USER, process.env.DB_PASSWD, {
    "host": process.env.DB_HOSTNAME,
    "dialect": process.env.DB,
    "port": process.env.DB_PORT
});