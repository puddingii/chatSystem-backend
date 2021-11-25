import express from "express";
import User from "../model/User.js";

const userController = express.Router();

userController.post("/update", async (req, res) => {
    try {
        const { 
            body: { loginId, nickname, avatar } 
        } = req;
        const isExisted = await User.findOne({ where: { loginId }});
        if(isExisted) {
            await User.update({ nickname, avatar }, { where: { loginId }});
        } else {
            await User.create({ loginId, nickname, avatar });
        }
        return res.sendStatus(201);
    } catch(e) {
        console.log(e);
        return res.sendStatus(400);
    }
});

userController.post("/get", async (req, res) => {
    try {
        const { 
            body: { loginId } 
        } = req;
        const userInfo = await User.findOne({ where: { loginId }});
        return res.status(200).json({ userInfo });
    } catch(e) {
        return res.sendStatus(400);
    }
});

export default userController;