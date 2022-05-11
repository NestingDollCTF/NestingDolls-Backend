import { Request,Response } from "express";
import Logger from "../../core/Logger";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../services/user.service";


export async function createUserHandler(req:Request, res:Response){
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (error:any) {
        Logger.error(error);
        return res.status(409).send(error.message)
    }
}