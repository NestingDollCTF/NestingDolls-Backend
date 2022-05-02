import express from "express";
import config from './config/default';
import app from "./src/server";
// DOT ENV IMPORTS
import * as dotenv from 'dotenv';
import Logger from "./core/Logger";
dotenv.config();

const port = config.port;

app.listen(port, () => {
    Logger.info("Server Started 🚀");
    Logger.info(`Listening on : http://localhost:${port}`);
}).on("error",(e)=>Logger.error("Error in starting the server ⚠️",e))
