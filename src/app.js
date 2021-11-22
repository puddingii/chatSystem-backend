import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import chatController from "./routes/chatController.js";
import userController from "./routes/userController.js";
dotenv.config(process.cwd(), ".env");

const app = express();
const corsOptions = {
    origin: [/localhost:8080/]
};

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/node_modules", express.static("node_modules"));

app.use("/chat", chatController);
app.use("/user", userController);

const handleListen = () => console.log(`Listening : http://localhost:${process.env.PORT}`);
app.listen(process.env.PORT, handleListen);