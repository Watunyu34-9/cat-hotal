import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export async function POST(request: NextRequest){
    const body = await request.json()

    const user = await prisma.user.findUnique({ where: {
        email: body.email,
        password: body.password
    }})

    if(user){
        return NextResponse.json({
            user,
        })
    }else{
        return NextResponse.error()
    }
}