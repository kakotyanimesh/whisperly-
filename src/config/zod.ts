import { z } from "zod"

export const signupObject = z.object({
    email : z.string().email({message : "Provide a valid email address"}),
    password : z.string().max(20, {message : "Max 15 character is allowed to be password"}),
    username : z.string().max(20, {message : "Max 15 charcater is allowed to be username"}).min(3 , {message : "Minimum 3 charcater is needed to be username"})

})


export const signinObject = z.object({
    username : z.string().max(20, {message : "Max 15 charcater is allowed to be username"}).min(3 , {message : "Minimum 3 charcater is needed to be username"}),
    password : z.string().max(20, {message : "Max 15 character is allowed to be password"}),


})

export const artistObject = z.object({
    displayName : z.string().max(20, {message : "Max 20 words is allowed for displayName"}),
    bio : z.string().max(160, {message : "Your bio text limit exceeded"}).min(10, {message : 'Minimum 10 letters of bio needed'}),
    gender : z.enum(["MALE", "FEMALE", "TRANSGENDER", "NON_BINARY"]),
})