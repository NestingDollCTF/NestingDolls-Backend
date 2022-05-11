import {omit} from "lodash";
import {string, object , TypeOf} from "zod";

export const createUserSchema = object({
    body : object({
        name: string({
            required_error : "Name is Required!!"
        }),
        password : string({
            required_error : "Password is required!!"
        }).min(10, "Password too short - Should be 10 chars minimum"),
        passwordConfirmation : string({
            required_error : "Password Confirmation is required!!"
        }),
        username : string({
            required_error : "Username is required!!"
        })
    }).refine((data) => data.password === data.passwordConfirmation, {
        message : "Passwords don't match",
        path : ["Password Confirmation"]
    })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">