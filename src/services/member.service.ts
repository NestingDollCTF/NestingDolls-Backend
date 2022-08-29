import MemberModel , {MemberDocument}from "../models/member.model";
import {FilterQuery,UpdateQuery, QueryOptions} from 'mongoose';


export async function addMember(input : Object){
    try {
        const member = await MemberModel.create(input);
        return member.toJSON();
    } catch (error:any) {
        throw new Error(error);
    }
}

export async function findMembers(){
    return await MemberModel.find();
}

export async function findAndUpdateMember(query : FilterQuery<MemberDocument>, update: UpdateQuery<MemberDocument>, options : QueryOptions){
    return MemberModel.findOneAndUpdate(query,update,options);
}

export async function deleteMember(query : FilterQuery<MemberDocument>){
    return MemberModel.deleteOne(query);
}