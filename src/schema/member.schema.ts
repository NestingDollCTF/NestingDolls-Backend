import {array, object,string,TypeOf} from "zod";

const socialsArraySchema = object({
    type : string(),
    link : string()
})

const payload = {
    body : object({
        name : string({
            required_error : "Name of member is required"
        }),
        quote : string({
            required_error : "Quote is required :)"
        }),
        speciality : array(string()),
        socials : array(socialsArraySchema)
    })
}

const params = {
    params: object({
        memberId : string({
            required_error: "Member ID is required"
        })
    })
}


export const createMemberSchema = object({...payload});
export const updateMemberSchema = object({...payload, ...params});
export const deleteMemberSchema = object({...params});
export const getMemberSchema = object({...params});


export type createMemberInput = TypeOf<typeof createMemberSchema>;
export type updateMemberInput = TypeOf<typeof updateMemberSchema>;
export type deleteMemberInput = TypeOf<typeof deleteMemberSchema>;
export type getMemberInput = TypeOf<typeof getMemberSchema>;