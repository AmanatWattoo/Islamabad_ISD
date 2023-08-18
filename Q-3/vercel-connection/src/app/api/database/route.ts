import { NextRequest, NextResponse } from "next/server";
import { UserSignUp, db } from "../../../../database/drizzle";

export const POST =async(request:NextRequest)=>{
    const req = await request.json()
    try {
        const res = await db.insert(UserSignUp).values({
            Name:req.Name,
            Email:req.Email,
            Password:req.Password
        }).returning()
        console.log("Congrats data inserted")
        return NextResponse.json({res})

    } catch (error) {
        console.log(error,"There is an erro to post the data")
    }
}