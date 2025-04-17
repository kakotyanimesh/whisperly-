import Nextauth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {signinObject} from "@/config/zod"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const { handlers, auth} = Nextauth({
    providers : [
        Credentials({
            name : "credentials",
            credentials : {
                username : {label : "username", type : "text", placeholder : "animesh33"},
                password : {label : "password", type : "password", placeholder : "animeshasdpas"}
            },
            authorize : async (credentials) => {
                const parsedObject = signinObject.safeParse(credentials)

                if(!parsedObject.success){
                    throw new CredentialsSignin("Invalid inputs")
                }

                const { username, password } = parsedObject.data

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username
                        }
                    })

                    if(!user){
                        throw new Error("Invalid username or password")
                    }

                    const comparePassword = await bcrypt.compare(password, user.password)

                    if(!comparePassword){
                        throw new Error("Invalid password or username")
                    }

                    const userData = {
                        email : user.email,
                        id : user.id.toString(),
                        username : user.username

                    }

                    return userData
                } catch (error) {
                    throw new Error(`error at signin ${error}`)
                }
            }
        })
    ],
    secret : process.env.AUTH_SECRET,
    session : {
        strategy : "jwt",
        maxAge : 60 * 60 * 60
    },
    callbacks : {
        async jwt({token, user}){
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
            }
            return session
        },
        signIn : async ({account}) => {
            if(account?.provider === "credentials"){
                return true
            } else {
                return false
            }
        }
    },
    pages : {
        signIn : "/signin"
    }
})