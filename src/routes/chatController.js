import express from "express";
import Chat from "../model/Chat.js";

const chatController = express.Router();

chatController.post("/save", async (req, res) => {
    const { 
        body: { loginId, nickname, avatar, content } 
    } = req;
    try {
        const logCount = await Chat.count();
        if(logCount >= 250) {
            await Chat.destroy({ where: {} ,limit: 50 })
        }
        await Chat.create({ loginId, nickname, avatar, content });
        return res.sendStatus(201);
    } catch(e) {
        console.log(e);
        return res.sendStatus(400);
    }
});

chatController.get("/get", async (req, res) => {
    try {
        const chatLogs = await Chat.findAll();
        return res.status(200).json({ chatLogs });
    } catch(e) {
        return res.sendStatus(400);
    }
});

export default chatController;