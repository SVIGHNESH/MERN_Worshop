import LoginModel from "./module.js";
import express from "express";

let Login = express.Router();
Login.get("/", async (req, res) => {
    let data = await LoginModel.find();
    res.send(data);
})

Login.get("/:id", async (req, res) => {
    let data = await LoginModel.findById(req.params.id);
    res.send(data);
})

export {Login}