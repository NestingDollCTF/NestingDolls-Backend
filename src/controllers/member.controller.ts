import {Request,Response} from 'express';
import Logger from '../../core/Logger';
import { addMember, deleteMember, findAndUpdateMember, findMembers } from '../services/member.service';

export async function addMemberHandler(req:Request, res:Response) {
    try {
        const member = await addMember(req.body);
        res.send(member);
    } catch (error:any) {
        Logger.error(error);
    }
}

export async function getMembersHandler(req:Request, res:Response) {
    const members = await findMembers();
    res.send(members);
}

export async function updateMemberHandler(req:Request, res:Response){
    try {
        const update = req.body;
        const memberId = req.params.memberId;

        const updatedMember = await findAndUpdateMember({memberId},update, {new:true} );

        return res.send(updatedMember);
    } catch (error:any) {
        Logger.error(error);
    }
   
}

export async function deleteMemberHandler(req:Request, res:Response) {
    try {
        const memberId = req.params.memberId;
        await deleteMember({memberId});
        return res.status(200).send("Member is deleted successfully");
    } catch (error:any) {
        Logger.error(error);
    }    
}