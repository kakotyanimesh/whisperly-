import { signupObject } from "@/config/zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma";





export async function POST(req:NextRequest) {
    const parsedObject = signupObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json(
            {msg : `Error at validate the schema ${JSON.stringify(parsedObject.error.errors)}`},
            {status : 400}
        )
    }

    const {username, email, password } = parsedObject.data
    
    try {
        const hasedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data : {
                username,
                password : hasedPassword,
                email
            }
        })

        return NextResponse.json(
            {msg : "user created"}
        )
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError && error.code === "P2002"){
            return NextResponse.json(
                {msg : "user already exits"},
                {status : 409}
            )
        }
    }
    return NextResponse.json(
        {msg : "Error at register user"},
        {status : 500}
    )
}