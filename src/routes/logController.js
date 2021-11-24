import express from "express";
import LoginLog from "../model/LoginLog.js";

const logController = express.Router();

logController.post("/get", async(req, res) => {
    try {
        const recentLog = await LoginLog.findOne({ order: [['id', 'DESC']], limit: 1 });
        return res.status(200).json(recentLog);
    } catch(e) {
        console.log(e);
        return res.sendStatus(400);
    }
});

logController.post("/save", async(req, res) => {
    try {
        const { 
            body: { loginId, isRemembered }
        } = req;

        await LoginLog.create({ loginId, isRemembered });
        return res.sendStatus(201);
    } catch(e) {
        console.log(e);
        return res.sendStatus(400);
    }
});

export default logController;