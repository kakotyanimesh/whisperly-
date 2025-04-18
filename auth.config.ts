import { signinObject } from "@/config/zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { CredentialsSignin, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";


const authConfig : NextAuthConfig =  {
    providers : [
        Credentials({
            name : "credentials",
            credentials : {
                username : {label : "username", type : "text", placeholder: "your username "},
                password : {label : "password", type : "password", placeholder : "your password here"}
            },
            authorize : async (credentials) => {
                const parsedObject = signinObject.safeParse(credentials)

                if(!parsedObject.success){
                    throw new CredentialsSignin("Invalid data type provided")
                }

                const {username, password } = parsedObject.data
                
                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username
                        }
                    })    

                    if(!user){
                        throw new Error("Invalid password or username")
                    }

                    const compare = await bcrypt.compare(password, user.password)

                    if(!compare){
                        throw new Error("Invalid username or password")
                    } 

                    const userData = {
                        email : user.email,
                        id : user.id.toString(),
                        username : user.username
                    }

                    return userData
                } catch (error) {
                    throw new Error(`error while signup ${error}`)
                }
            } 
        })
    ],
    callbacks : {
        async jwt({token, user}){
            if(user){
                token.email = user.email
                token.id = user.id
            }
            return token
        },
        async session({session, token}){
            if(token.sub){
                session.user.id = token.sub
                session.user.email = token.email as string
            }
            return session
        },
        signIn : async({account}) => {
            if(account?.provider === "credentials"){
                return true
            } else {
                return false
            }
        }
    }
}

export default authConfig