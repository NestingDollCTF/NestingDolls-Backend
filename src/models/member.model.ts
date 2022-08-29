import mongoose from "mongoose";

interface SpecialityType {
    skill : String
}

interface SocialsType {
    type : String,
    link : String
}

export interface MemberDocument extends mongoose.Document{
    name : String;
    quote :  String;
    speciality : Array<SpecialityType>;
    socials : Array<SocialsType>;
    createdAt : Date;
    updatedAt : Date;
}

const MemberSchema = new mongoose.Schema(
    {
        name : {type : String,required : true},
        quote :  {type : String, required : true},
        speciality : {type : Array , required : true},
        socials : {type : Array, required : true}
    },
    {
        timestamps : true
    }
)

const MemberModel = mongoose.model<MemberDocument>("Member",MemberSchema);

export default MemberModel;