import { artistObject } from "@/config/zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    const parsedObject = artistObject.safeParse(await req.json)

    if(!parsedObject.success){
        return NextResponse.json({
            msg : `Error while parsing artist data ${parsedObject.error.errors}`
        }, {status : 401})
    }
}