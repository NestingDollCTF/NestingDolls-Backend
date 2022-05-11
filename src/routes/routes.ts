import { Express,Request, Response } from "express";
import { createUserSessionHandler, getUserSessionsHandler,deleteSessionsHandler } from "../controllers/session.controller";
import { createUserHandler } from "../controllers/user.controller";
import requireUser from "../middlewares/requireUsers";
import validate from "../middlewares/validateResources";
import { createSessionSchema } from "../schema/session.schema";
import { createUserSchema } from "../schema/user.schema";

export default function (app: Express){
    app.get("/healthcheck" , (req:Request, res:Response)=>{
        res.sendStatus(200);
    })

    // Auth Routes
    // -----------
    
    // Register User
    app.post("/api/register", validate(createUserSchema), createUserHandler);
    // Login User
    app.post("/api/session", validate(createSessionSchema), createUserSessionHandler);
    // Get User Sessions
    app.get("/api/session", requireUser,getUserSessionsHandler);
    // Delete User Sessions
    app.delete("/api/session", requireUser, deleteSessionsHandler);
}