import express from "express";
import config from './config/default';
import app from "./src/server";
// DOT ENV IMPORTS
import * as dotenv from 'dotenv';
import Logger from "./core/Logger";
import connectToDb from "./database/db";
import routes from "./src/routes/routes";
dotenv.config();

const port = config.port;

app.listen(port, () => {
    Logger.info("Server Started 🚀");
    Logger.info(`Listening on : http://localhost:${port}`);
    connectToDb();
    routes(app);
}).on("error",(e)=>Logger.error("Error in starting the server ⚠️",e))
