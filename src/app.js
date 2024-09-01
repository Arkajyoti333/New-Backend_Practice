import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Const_data_Limits } from "./constant.js";
import EnvConfig from "./config/config.js";



// Created a app object of express
const app =express();

//     app configuration using middlewares

app.use(express.json({
    limit:Const_data_Limits,
}));

app.use(cors({
    origin:EnvConfig.Cors_Origin,
    credentials:true,
}))

app.use(express.urlencoded({
    limit:Const_data_Limits,
    extended:true,
}));

app.use(express.static("public"));

app.use(cookieParser());







export default app;