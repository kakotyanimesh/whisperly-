import { signinObject } from "@/config/zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const {handlers , signIn, signOut, auth} = NextAuth({
    secret : process.env.AUTH_SECRET || "asdasd",
    session : {
        strategy : "jwt"
    },
    providers : [
        Credentials({
            name : "credentials",
            credentials : {
                username : {label : "username", placeholder : "animesh@45", type: "text"},
                password : {label : "password", placeholder : "Discpline", type: "password"}
            },
            authorize : async (credentials) => {
                const parsedObject = signinObject.safeParse(credentials)

                if(!parsedObject.success){
                    throw new CredentialsSignin("Invalid type of credentials")
                }

                const {username, password} = credentials 

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username : username as string
                        }
                    })

                    if(!user) {
                        throw new Error("Invalid user or password")
                    }

                    const comparePassword = await bcrypt.compare(password as string, user.password)

                    if(!comparePassword) {
                        throw new Error("Invalid password")
                    }

                    const userData = {
                        email : user.email,
                        username : user.username,
                        id : user.id.toString()
                    }
                    return userData
                } catch (error) {
                    throw new Error(`sign in error ${error}`)
                }
            }
        })
    ],
    pages : {
        signIn : "/signin"
    },
    callbacks : {

        async jwt ({token, user}){
            if(user){
                token.email = user.email
                token.id = user.id
            }
            return token
        },
        async session ({session, token}){
            if(token.sub){
                session.user.id = token.sub
                session.user.email = token.email as string
                session.user.id= token.id
            }
            return session
        },

        signIn: async ({account}) => {
            if(account?.provider === "credentials"){
                return true
            } else {
                return false
            }
        }
    }
})